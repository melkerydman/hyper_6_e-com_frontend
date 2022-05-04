import { ICartItem, IProduct } from "../../Interfaces";
import { StyledQuantity, Button } from "./styled";

interface IProps {
  item?: ICartItem;
  quantity?: number;
  small?: boolean;
  handleReduceQuantity?: () => void;
  handleIncreaseQuantity?: () => void;
  handleAddToCart?: (
    item: IProduct,
    quantity?: number | undefined
  ) => Promise<void>;
  handleRemoveFromCart?: (
    id: string,
    clear?: boolean | undefined
  ) => Promise<void>;
}

const Quantity: React.FC<IProps> = ({
  item,
  quantity,
  small,
  handleReduceQuantity,
  handleIncreaseQuantity,
  handleAddToCart,
  handleRemoveFromCart,
}): JSX.Element => {
  return item ? (
    <StyledQuantity small={small}>
      <Button
        onClick={() => {
          if (!handleRemoveFromCart) return;
          handleRemoveFromCart(item._id);
        }}
      >
        -
      </Button>
      {item.quantity}
      <Button
        onClick={() => {
          if (!handleAddToCart) return;
          handleAddToCart(item);
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
