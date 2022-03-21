import styled from "styled-components";

interface IHi {
  visible?: boolean;
}

export const StyledCart = styled.section<IHi>`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  height: 100vh;
  width: calc(50% + 1px);
  background: red;

  transform: ${({ visible }) =>
    visible ? "translateX(0%)" : "translateX(100%)"};
  transition: all 0.3s ease-in;
`;
