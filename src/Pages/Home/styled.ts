import styled from "styled-components";

export const Hero = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  font-size: 72px;
  letter-spacing: var(--p1-letter-spacing);
`;

export const HeroImage = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 63.5%;
  aspect-ratio: 1 / 1;

  > img {
    max-height: 100%;
    transition: all 0.3s ease-in-out;
  }

  :hover {
    > img {
      transform: translateX(1rem) translateY(1rem);
    }
  }
`;
