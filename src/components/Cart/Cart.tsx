import { StyledCart, CartList, CartListItem } from "./Cart.styled";
import { VerticalDivider } from "../Divider/Divider.styled";
import { ICart } from "../../App";

interface IProps {
  cart: ICart;
  handleOpenCart: () => void;
}

const Cart: React.FC<IProps> = ({ cart, handleOpenCart }): JSX.Element => {
  return (
    <StyledCart isShowing={cart.isShowing}>
      <VerticalDivider />
      <div
        onClick={() => {
          handleOpenCart();
        }}
      >
        Close
      </div>
      <div>Items</div>
      <CartList>
        {cart.items.map((item) => (
          <CartListItem key={item.id}>
            <p>{item.title}</p>
            <p>{item.artist}</p>
            <p>{item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </CartListItem>
        ))}
      </CartList>
    </StyledCart>
  );
};

export default Cart;
