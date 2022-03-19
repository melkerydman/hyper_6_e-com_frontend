import styled from "styled-components";

export const Footer = styled.footer`
  /* Display */
  display: flex;
  justify-content: flex-end;
  /* Box model */
  width: 100vw;
  height: 150px;

  position: relative;

  VerticalDivider {
    background: red;
    width: 50px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;

  span {
    display: inline-block;
  }
`;
