import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 1.25rem 0;
  background: var(--color-light);

  border: 1px solid black;

  transition: all 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    background: black;
    color: var(--color-light);
  }
`;
