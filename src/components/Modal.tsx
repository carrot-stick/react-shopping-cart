import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 500px;
`;

const ModalHeader = styled.h2`
  margin-top: 0;
`;

const ModalActions = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 10px;
    &:focus {
      outline: 2px solid blue;
    }
  }
`;

export const Modal = ({
  cartItems,
  onOrderComplete,
}: {
  cartItems: { id: number; name: string; quantity: number; price: number }[];
  onOrderComplete: () => void;
}) => {
  const firstElementRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    firstElementRef.current?.focus();
  }, []);

  return (
    <Overlay>
      <ModalContainer role="dialog" aria-modal="true" aria-labelledby="modalHeader" aria-describedby="modalDescription">
        <ModalHeader>주문 내역 확인</ModalHeader>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity}개 - {item.price.toLocaleString()}원
            </li>
          ))}
        </ul>
        <ModalActions>
          <button ref={firstElementRef} className="primary-button" onClick={onOrderComplete}>
            주문 완료
          </button>
        </ModalActions>
      </ModalContainer>
    </Overlay>
  );
};
