import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

export const Layer = () => {
  const darkMode = localStorage.getItem('darkMode');
  const [show, setShow] = useState(Boolean(darkMode));

  const handleDarkModeClick = () => {
    setShow(true);
    localStorage.setItem('darkMode', 'true');
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShow(false);
        localStorage.removeItem('darkMode');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      {show && <Root />}
      {!show && <CircleButton onClick={handleDarkModeClick}>시작</CircleButton>}
    </>
  );
};

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 10000;
`;

const CircleButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d2d2d2;
  text-align: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10000;
  cursor: pointer;
`;
