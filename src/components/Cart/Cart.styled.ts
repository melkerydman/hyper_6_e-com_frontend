import styled from "styled-components";

type CartType = {
  isShowing?: boolean;
};

export const StyledCart = styled.section<CartType>`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  height: 100vh;
  width: calc(50% + 1px);
  background: red;

  transform: ${({ isShowing }) =>
    isShowing ? "translateX(0%)" : "translateX(100%)"};
  transition: all 0.3s ease-in;
  overflow: scroll;
`;

export const CartList = styled.ul``;

export const CartListItem = styled.li``;
