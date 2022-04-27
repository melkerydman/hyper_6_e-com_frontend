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
export const ProductListItem = styled.li`
  h2 {
    font-size: var(--h4);
    letter-spacing: var(--h1-letter_spacing);
  }
  p {
    font-size: var(--h5);
    margin-top: 0.4rem;
    letter-spacing: var(--h1-letter_spacing);
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 1.2rem;
  margin-bottom: 0.5rem;
  aspect-ratio: 1 / 1;
  background-color: var(--color-grey);

  > img {
    max-height: 100%;
    transition: all 0.5s ease-in-out;
    transform: scale(1);
  }

  :hover {
    > img {
      transform: scale(1.05);
    }
  }
`;
