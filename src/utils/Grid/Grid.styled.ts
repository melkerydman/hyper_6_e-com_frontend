import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  position: relative;
`;

export const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  position: relative;
`;
