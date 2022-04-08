import { useCart } from "../../Hooks";
import { ICartItem } from "../../Interfaces";
import { StyledQuantity, Button } from "./styled";

interface IProps {
  item?: ICartItem;
  quantity?: number;
  handleReduceQuantity?: () => void;
  handleIncreaseQuantity?: () => void;
  small?: boolean;
}

const Quantity: React.FC<IProps> = ({
  item,
  quantity,
  handleReduceQuantity,
  handleIncreaseQuantity,
  small,
}): JSX.Element => {
  const { addToCart, removeItemFromCart } = useCart();

  return item ? (
    <StyledQuantity small={small}>
      <Button
        onClick={() => {
          removeItemFromCart(item._id);
        }}
      >
        -
      </Button>
      {item.quantity}
      <Button
        onClick={() => {
          addToCart(item);
        }}
      >
        +
      </Button>
    </StyledQuantity>
  ) : (
    <StyledQuantity small={small}>
      <Button onClick={handleReduceQuantity}>-</Button>
      {quantity}
      <Button onClick={handleIncreaseQuantity}>+</Button>
    </StyledQuantity>
  );
};

export default Quantity;
