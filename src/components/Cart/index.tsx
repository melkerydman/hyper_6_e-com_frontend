import { useContext } from "react";
import { CartWrapper, StyledCart, CartHeader, MenuButton } from "./styled";

import { VerticalDivider, HorizontalDivider, Button } from "../../Components";
import { CartContext, ProductContext } from "../../Contexts";
import CartItems from "../CartItems";
import { Link } from "react-router-dom";

interface IProps {
  handleOpenCart: () => void;
}

const Cart: React.FC<IProps> = ({ handleOpenCart }): JSX.Element => {
  const { cart, openCart, setOpenCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  return openCart ? (
    // <CartWrapper isShowing={openCart}>
    <CartWrapper
      isShowing={openCart}
      onClick={(e) => {
        // If target clicked is specifically CartWrapper, not a child, close modal
        if (e.currentTarget === e.target) {
          setOpenCart(false);
        }
      }}
    >
      <StyledCart>
        <VerticalDivider />
        <CartHeader>
          <div>Bag({cart.totalQuantity || 0})</div>
          <MenuButton
            onClick={() => {
              handleOpenCart();
            }}
          >
            Close
          </MenuButton>
          <HorizontalDivider bottom />
        </CartHeader>
        <CartItems cart={cart} products={products} />
        <h2>Subtotal:</h2>
        <p>£{cart.totalPrice || 0}</p>
        <Link to="/checkout">
          <Button
            onClick={() => {
              handleOpenCart();
            }}
          >
            Checkout
          </Button>
        </Link>
      </StyledCart>
    </CartWrapper>
  ) : (
    <></>
  );
};

export default Cart;
