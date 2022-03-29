import styled from "styled-components";

const StyledQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 0.8rem;

  border: 1px solid var(--color-grey);

  :hover {
    border: 1px solid var(--color-dark);
  }
`;

const Button = styled.button`
  background: none;
  color: none;
  border: none;
  padding: none;
  font: inherit;
  cursor: pointer;
`;

interface IProps {
  quantity: number;
  handleReduceQuantity: (quantity: number) => void;
  handleIncreaseQuantity: () => void;
}

const Quantity: React.FC<IProps> = ({
  quantity,
  handleReduceQuantity,
  handleIncreaseQuantity,
}): JSX.Element => {
  return (
    <StyledQuantity>
      <Button
        onClick={() => {
          handleReduceQuantity(quantity);
        }}
      >
        -
      </Button>
      {quantity}
      <Button onClick={handleIncreaseQuantity}>+</Button>
    </StyledQuantity>
  );
};

export default Quantity;
