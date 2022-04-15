import styled from "styled-components";

export const Footer = styled.footer`
  /* Display */
  display: flex;
  justify-content: flex-end;
  /* Box model */
  width: 100vw;

  position: relative;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: flex-end;
  /* align-items: center; */
  flex-wrap: wrap;

  width: 50%;
  padding: 5rem 3rem 1rem;

  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: normal;

  h3 {
    flex: 0 0 100%;
    padding-bottom: 3rem;
    text-align: center;
    font-family: Kaensla;
    font-size: 1.5rem;
  }
  h4 {
    margin-left: 2rem;
  }

  a {
    text-indent: 2rem;
    display: inline-block;
  }

  span {
    display: inline-block;
    position: absolute;
  }
`;
