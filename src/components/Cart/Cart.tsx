import { StyledCart, CartHeader, CartList, CartListItem } from "./Cart.styled";
import { VerticalDivider, HorizontalDivider, Button } from "../../Components";
import { ICart, IProduct } from "../../App";

interface IProps {
  cart: ICart;
  handleOpenCart: () => void;
  removeItemFromCart: (id: number) => void;
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
        <div>Bag({cart.totalQuantity})</div>
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
        {cart.items.map((item) => (
          <CartListItem key={item.id}>
            <p>{item.title}</p>
            <p>{item.artist}</p>
            <p>£{item.price}</p>
            <div>
              <button onClick={() => removeItemFromCart(item.id)}>-</button>
              <div>{item.quantity}</div>
              <button onClick={() => addItemToCart(item)}>+</button>
            </div>
          </CartListItem>
        ))}
      </CartList>
      <h2>Subtotal</h2>
      <Button>Checkout</Button>
    </StyledCart>
  );
};

export default Cart;
