import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { Product } from '@/constants';

type Order = Array<
  Product & {
    quantity: number;
  }
>;

const HomePage = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('order') || '[]');
    setOrders(storedOrders);
  }, []);

  console.log(orders);
  return (
    <>
      <Header />
      <div>
        <h1 className="mt-100 font-32 text-center">웹 접근성, 손끝으로 탐험하고 🖐️</h1>
        <h1 className="mt-10 font-32 text-center">웹의 즐거움, 모두가 함께 나눠요 🌍</h1>
      </div>
      <div className="flex flex-col w-480" style={{ margin: '50px auto' }}>
        <h2 className="text-center">주문 내역</h2>
        {orders.length > 0 ? (
          orders.map((product) => (
            <ul className="text-center border p-5 mt-20 gap-15">
              {product.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span> <span>{item.price}원</span> <span>{item.quantity}개</span>
                </li>
              ))}
            </ul>
          ))
        ) : (
          <p className="text-center">주문 내역이 없습니다.</p>
        )}
      </div>
    </>
  );
};

export default HomePage;
