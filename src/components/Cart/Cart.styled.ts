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
  width: calc(62.45% + 1px);
  background: var(--color-primary);

  transform: ${({ isShowing }) =>
    isShowing ? "translateX(0%)" : "translateX(100%)"};
  transition: all 0.3s ease-in;
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

export const CartList = styled.ul`
  display: grid;
  grid-template-rows: auto;
  gap: 1rem;
`;

export const CartListItem = styled.li`
  position: relative;
  padding: 1rem;
`;
