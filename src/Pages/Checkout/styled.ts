import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
