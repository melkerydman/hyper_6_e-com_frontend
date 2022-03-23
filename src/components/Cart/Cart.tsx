import { StyledCart } from "./Cart.styled";
import { VerticalDivider } from "../Divider/Divider.styled";
import { ICart } from "../../App";

interface IProps {
  // cart: ICart;
  isShowing: ICart["isShowing"];
  handleOpenCart: () => void;
}

const Cart: React.FC<IProps> = ({ isShowing, handleOpenCart }): JSX.Element => {
  return (
    <StyledCart isShowing={isShowing}>
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
