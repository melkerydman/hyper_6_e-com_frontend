import styled, { keyframes } from "styled-components";

type CartType = {
  isShowing?: boolean;
};

const fadeBackground = keyframes`
 0% { background-color: rgba(23,23,23, 0); }
 100% { background-color: rgba(23,23,23, 0.5);}
`;

const slideIn = keyframes`
 0% { transform: translateX(100%) }
 100% {  transform: translateX(0%);}
`;

export const CartWrapper = styled.section<CartType>`
  display: grid;
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  grid-template-areas: ". . . . . . . cart";
  animation-name: ${fadeBackground};
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`;
export const StyledCart = styled.div`
  height: 100%;
  grid-area: cart;
  background: var(--color-light);
  animation-name: ${slideIn};
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  overflow: scroll;
`;

export const CartHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  font-size: var(--h3);
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  font-size: var(--h3);

  cursor: pointer;
`;