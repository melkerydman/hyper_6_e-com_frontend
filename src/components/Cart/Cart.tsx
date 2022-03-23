import { StyledCart } from "./Cart.styled";
import { VerticalDivider } from "../Divider/Divider.styled";
import { ICart } from "../../App";

interface IProps {
  // cart: ICart;
  cart: ICart;
  handleOpenCart: () => void;
}

const Cart: React.FC<IProps> = ({ cart, handleOpenCart }): JSX.Element => {
  const productsInCart = cart.items;

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
      <div>
        {productsInCart.map((product) => (
          <div>
            <p>{product.title}</p>
            <p>{product.artist}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </StyledCart>
  );
};

export default Cart;
