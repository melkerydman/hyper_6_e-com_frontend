import styled from "styled-components";

interface IProps {
  small?: boolean;
}

export const StyledQuantity = styled.div<IProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 0.8rem;

  border: 1px solid var(--color-grey);

  width: ${(props) => (props.small ? "72px" : "")};
  padding: ${(props) => (props.small ? "0.2rem 0.4rem;" : "0.5rem 0.8rem;")};

  :hover {
    border: 1px solid var(--color-dark);
  }
`;

export const Button = styled.button`
  background: none;
  color: none;
  border: none;
  padding: none;
  font: inherit;
  cursor: pointer;
`;
