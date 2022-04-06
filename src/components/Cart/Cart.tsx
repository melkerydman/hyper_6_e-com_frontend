import { useContext } from "react";
import { StyledCart, CartHeader, CartList, CartListItem } from "./Cart.styled";
import { VerticalDivider, HorizontalDivider, Button } from "../../Components";
import { CartContext, ProductContext } from "../../Contexts";
import { useCart } from "../../Hooks";

interface IProps {
  handleOpenCart: () => void;
}

const Cart: React.FC<IProps> = ({ handleOpenCart }): JSX.Element => {
  const { cart, openCart } = useContext(CartContext);
  const { addToCart, removeItemFromCart } = useCart();
  const { products } = useContext(ProductContext);

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
          cart.items.map((item) => {
            const product = products.find(
              (product) => product._id === item._id
            );

            return (
              <CartListItem key={item._id}>
                <p>{product ? product.title : "Unknown"}</p>
                <p>{product ? product.artist : "Unknown"}</p>
                <p>£{product ? product.price : "Unknown"}</p>
                <div>
                  <button onClick={() => removeItemFromCart(item._id)}>
                    -
                  </button>
                  <div>{item.quantity}</div>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
                <button onClick={() => removeItemFromCart(item._id, true)}>
                  Remove
                </button>
              </CartListItem>
            );
          })
        ) : (
          <></>
        )}
      </CartList>
      <h2>Subtotal:</h2>
      <p>£{cart.totalPrice || 0}</p>
      <Button>Checkout</Button>
    </StyledCart>
  );
};

export default Cart;
