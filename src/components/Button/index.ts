import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 1.25rem 0;
  background: var(--color-light);

  font-size: 0.8rem;
  /* text-transform: uppercase; */

  border: 1px solid black;

  transition: all 0.3s ease-in-out;

  cursor: pointer;
  // Neumorph playaround
  /* box-shadow: 4px 4px 22px #dedede, -4px -4px 22px #ffffff; */
  /* border: none; */

  &:hover {
    background: black;
    color: var(--color-light);
  }
`;
