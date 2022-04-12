import styled from "styled-components";

export const Button = styled.button`
  box-shadow: 4px 4px 22px #dedede, -4px -4px 22px #ffffff;
  /* width: 100%; */
  width: 75%;
  padding: 1.25rem 0;
  background: var(--color-light);

  font-size: 0.8rem;
  text-transform: uppercase;

  /* border: 1px solid black; */
  border: none;

  transition: all 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    background: black;
    color: var(--color-light);
  }
`;
