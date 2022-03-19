import styled from "styled-components";

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding-right: 140px;
`;
export const ProductImages = styled.div``;

export const ProductHeader = styled.header`
  h2 {
    font-weight: 500;
  }
`;

export const ProductDetails = styled.header`
  h2 {
    display: grid;
    grid-template-rows: auto;
    row-gap: 0.5rem;
  }
`;

export const Detail = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 1.5rem;
`;

export const ProductAction = styled.div``;
