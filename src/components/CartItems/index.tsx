import { useContext } from "react";
import { CartContext, ProductContext } from "../../Contexts/";
import { useCart } from "../../Hooks";
import { CartItem, StyledCartItems } from "./styled";
import { IProduct, ICart } from "../../Interfaces";

interface IProps {
  cart: ICart;
  products: IProduct[];
}

const CartItems: React.FC<IProps> = ({ cart, products }): JSX.Element => {
  // const { cart } = useContext(CartContext);
  const { addToCart, removeItemFromCart } = useCart();
  // const { products } = useContext(ProductContext);

  return (
    <StyledCartItems>
      {/* If there are items in the cart - map through them */}
      {cart.items ? (
        cart.items.map((item) => {
          const product = products.find((product) => product._id === item._id);

          return (
            <CartItem key={item._id}>
              <p>{product ? product.title : "Unknown"}</p>
              <p>{product ? product.artist : "Unknown"}</p>
              <p>£{product ? product.price : "Unknown"}</p>
              <div>
                <button onClick={() => removeItemFromCart(item._id)}>-</button>
                <div>{item.quantity}</div>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
              <button onClick={() => removeItemFromCart(item._id, true)}>
                Remove
              </button>
            </CartItem>
          );
        })
      ) : (
        <></>
      )}
    </StyledCartItems>
  );
};

export default CartItems;
