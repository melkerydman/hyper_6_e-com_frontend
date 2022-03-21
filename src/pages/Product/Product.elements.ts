import styled from "styled-components";

interface IDetail {
  top?: boolean;
}

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 1.5rem;
  padding-right: 140px;
`;
export const ProductImages = styled.div`
  height: 100%;
`;

export const ProductHeader = styled.header`
  h2 {
    font-size: 47px;
    font-weight: 500;
  }
`;

export const ProductDetails = styled.div`
  position: relative;

  h2 {
    display: grid;
    grid-template-rows: auto;
    row-gap: 3rem;
  }
`;

export const Detail = styled.div<IDetail>`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 1.5rem;

  white-space: pre-line;
  line-height: 1;

  margin-top: ${({ top }) => (top ? "1rem" : "0")};
`;

export const ProductAction = styled.div``;

export const MoreProducts = styled.div``;
