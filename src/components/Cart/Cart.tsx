import { StyledCart, CartHeader, CartList, CartListItem } from "./Cart.styled";
import { VerticalDivider, HorizontalDivider, Button } from "../../Components";
import { ICart, IProduct } from "../../Interfaces";

interface IProps {
  cart: ICart;
  handleOpenCart: () => void;
  removeItemFromCart: (id: string) => void;
  addItemToCart: (clickedItem: IProduct) => void;
}

const Cart: React.FC<IProps> = ({
  cart,
  handleOpenCart,
  removeItemFromCart,
  addItemToCart,
}): JSX.Element => {
  return (
    <StyledCart isShowing={cart.isShowing}>
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
