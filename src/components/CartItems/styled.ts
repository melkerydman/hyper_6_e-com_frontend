import styled from "styled-components";

export const StyledCartItems = styled.ul`
  /* display: grid;
  grid-template-rows: auto; */
  gap: 1rem;
  display: flex;
  flex-direction: column;

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  overflow: scroll;
`;

export const CartItem = styled.li`
  position: relative;
  /* padding: 1rem; */
  display: grid;
  gap: 1rem;
  grid-template-columns: 150px 1fr;

  button {
    background: none;
    cursor: pointer;
    border: none;
  }
`;

export const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > button {
    }

    &:last-child {
      align-items: flex-end;
    }
  }
`;
