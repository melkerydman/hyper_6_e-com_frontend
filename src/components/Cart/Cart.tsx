import { StyledCart } from "./Cart.styled";
import { VerticalDivider } from "../Divider/Divider.elements";

const Cart = (props: any) => {
  return (
    <StyledCart
      visible={props.visible}
      onClick={() => {
        props.handleCartOpen();
      }}
    >
      <VerticalDivider />
      close
    </StyledCart>
  );
};

export default Cart;
