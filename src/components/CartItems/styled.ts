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
  grid-template-columns: 150px 1fr;
`;
