import { StyledCart } from "./Cart.styled";
import { VerticalDivider } from "../Divider/Divider.styled";
import { IState as Props } from "../../App";

interface IProps {
  cart: Props["cart"];
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
    </StyledCart>
  );
};

export default Cart;
