import { useContext } from "react";
import { StyledCart, CartHeader, CartList, CartListItem } from "./Cart.styled";
import { VerticalDivider, HorizontalDivider, Button } from "../../Components";
import { CartContext } from "../../Contexts";

interface IProps {
  handleOpenCart: () => void;
}

const Cart: React.FC<IProps> = ({ handleOpenCart }): JSX.Element => {
  const { cart, openCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

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
      <CartList>
        {/* If there are items in the cart - map through them */}
        {cart.items ? (
          cart.items.map((item) => (
            <CartListItem key={item._id}>
              <p>{item.title}</p>
              <p>{item.artist}</p>
              <p>£{item.price}</p>
              <div>
                <button onClick={() => removeItemFromCart(item._id)}>-</button>
                <div>{item.quantity}</div>
                {console.log("quantity from cart", item.quantity)}
                <button onClick={() => addItemToCart(item)}>+</button>
              </div>
            </CartListItem>
          ))
        ) : (
          <></>
        )}
      </CartList>
      <h2>Subtotal</h2>
      <Button>Checkout</Button>
    </StyledCart>
  );
};

export default Cart;
