import { useState, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '@/components/Header';
import { Modal } from '@/components/Modal.tsx';
import { PRODUCTS } from '@/constants';

const initializeCart = () => {
  const storedCartIds = JSON.parse(localStorage.getItem('cart') || '[]');
  return PRODUCTS.filter((product) => storedCartIds.includes(product.id)).map((product) => ({
    ...product,
    quantity: 1,
  }));
};

const CartPage = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(initializeCart());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const disabledOrderButton = cartItems.length === 0;

  const handleQuantityChange = (productId: number, delta: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item,
      ),
    );
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, productId: number) => {
    if (event.key === 'ArrowUp') {
      handleQuantityChange(productId, 1);
    } else if (event.key === 'ArrowDown') {
      handleQuantityChange(productId, -1);
    }
  };

  const handleRemoveItem = (productId: number) => {
    const newCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(newCartItems);

    const newStoredCartIds = newCartItems.map((item) => item.id);
    localStorage.setItem('cart', JSON.stringify(newStoredCartIds));

    toast('상품이 삭제되었습니다.');
  };

  const handleOrder = () => {
    setIsModalOpen(true);
    localStorage.setItem('cart', JSON.stringify([]));

    const currentOrder = JSON.parse(localStorage.getItem('order') || '[]');
    localStorage.setItem('order', JSON.stringify([...currentOrder, cartItems]));
  };

  const completeOrder = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      {isModalOpen && <Modal cartItems={cartItems} onOrderComplete={completeOrder} />}
      <Header />
      <section className="cart-section">
        <div className="flex">
          <section className="cart-left-section">
            {cartItems.map((product) => (
              <div className="cart-container" key={product.id}>
                <div className="flex gap-15 mt-10">
                  <img className="w-144 h-144" src={product.imageUrl} alt={product.name} />
                  <span className="cart-name">{product.name}</span>
                </div>
                <div className="flex-col-center justify-end gap-15">
                  <button className="product-button" onClick={() => handleRemoveItem(product.id)}>
                    <img className="cart-trash-svg" src="./assets/icon2.svg" />
                  </button>
                  <div className="number-input-container">
                    <input
                      type="number"
                      className="number-input"
                      value={product.quantity}
                      min={1}
                      onKeyDown={(e) => handleKeyDown(e, product.id)}
                    />
                    <div>
                      <button className="number-input-button" onClick={() => handleQuantityChange(product.id, 1)}>
                        ▲
                      </button>
                      <button className="number-input-button" onClick={() => handleQuantityChange(product.id, -1)}>
                        ▼
                      </button>
                    </div>
                  </div>
                  <span className="cart-price">{(product.price * product.quantity).toLocaleString()}원</span>
                </div>
              </div>
            ))}
          </section>
          <section className="cart-right-section">
            <div className="cart-right-section__top">
              <h3 className="cart-title">결제예상금액</h3>
            </div>
            <hr className="divide-line-thin" />
            <div className="cart-right-section__bottom">
              <div className="flex justify-between p-20 mt-20">
                <span className="highlight-text">합계</span>
                <span className="highlight-text">{totalAmount.toLocaleString()}원</span>
              </div>
              <div className="flex-center mt-30 mx-10">
                <button className="primary-button flex-center" disabled={disabledOrderButton} onClick={handleOrder}>
                  주문하기({cartItems.length}개)
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default CartPage;
