import { useContext } from "react";
import { StyledCart, CartHeader } from "./Cart.styled";

import { VerticalDivider, HorizontalDivider, Button } from "../../Components";
import { CartContext } from "../../Contexts";
import CartItems from "../CartItems";

interface IProps {
  handleOpenCart: () => void;
}

const Cart: React.FC<IProps> = ({ handleOpenCart }): JSX.Element => {
  const { cart, openCart } = useContext(CartContext);

  return (
    <StyledCart isShowing={openCart}>
      <VerticalDivider />
      <CartHeader>
        <div>Bag({cart.totalQuantity || 0})</div>
        <div
          onClick={() => {
            handleOpenCart();
          }}
        >
          Close
        </div>
        <HorizontalDivider bottom />
      </CartHeader>
      <CartItems />
      <h2>Subtotal:</h2>
      <p>£{cart.totalPrice || 0}</p>
      <Button>Checkout</Button>
    </StyledCart>
  );
};

export default Cart;
