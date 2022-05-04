import styled from "styled-components";

// export interface IProductListItem {
//   "data-id": number;
//   key: number;
//   onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
// }

export const ProductHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 250px;

  h2 {
    font-size: var(--h2);
    width: 33%;
    text-align: center;

    @media (max-width: 768px) {
      width: 50%;
    }
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;

  padding: 1rem;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const ProductListItem = styled.li``;

export const ProductInfo = styled.div`
  margin-top: 0.5rem;
  h2 {
    font-size: var(--h4);
    letter-spacing: var(--p1-letter_spacing);
  }
`;
