import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 1.2rem;
  /* margin-bottom: 0.5rem; */
  aspect-ratio: 1 / 1;
  background-color: var(--color-light-second);

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
