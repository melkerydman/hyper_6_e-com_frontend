import { StyledCart } from "./Cart.styled";
import { VerticalDivider } from "../Divider/Divider.styled";

interface IProps {
  isShowing: boolean;
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
