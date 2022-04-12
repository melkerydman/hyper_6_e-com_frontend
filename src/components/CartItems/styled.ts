import styled from "styled-components";

export const StyledCartItems = styled.ul`
  display: grid;
  grid-template-rows: auto;
  gap: 1rem;
`;

export const CartItem = styled.li`
  position: relative;
  padding: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 150px 1fr;
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
