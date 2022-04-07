import styled from "styled-components";

interface IDetail {
  top?: boolean;
}

// Product information
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 1.5rem;
  padding-right: 140px;
`;

export const ProductHeader = styled.header`
  h2 {
    font-size: var(--h1);
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

export const ProductImages = styled.div`
  max-height: 65vh;
  overflow: scroll;
`;

export const Action = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 1rem;
`;
export const Quantity = styled.div`
  display: flex;
`;

export const MoreProducts = styled.div`
  height: 200px;
`;
