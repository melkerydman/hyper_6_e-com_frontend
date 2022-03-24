import styled from "styled-components";

// export interface IProductListItem {
//   "data-id": number;
//   key: number;
//   onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
// }

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;
export const ProductListItem = styled.li`
  background: white;
`;
