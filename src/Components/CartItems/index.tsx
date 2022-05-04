import { CartItem, ProductInfo, StyledCartItems } from "./styled";
import { IProduct, ICart } from "../../Interfaces";
import { Quantity, Image } from "../../Components";
import { Link } from "react-router-dom";
import { HorizontalDivider } from "../Divider";
import { addToCart, removeFromCart } from "../../Services";
import { useContext } from "react";
import { CartContext } from "../../Contexts";

interface IProps {
  cart: ICart;
  products: IProduct[];
}

const CartItems: React.FC<IProps> = ({ cart, products }): JSX.Element => {
  const { setCart } = useContext(CartContext);

  const handleRemoveFromCart = async (id: string, clear?: boolean) => {
    const cart = await removeFromCart(id, clear);
    setCart(cart);
  };

  const handleAddToCart = async (item: IProduct, quantity?: number) => {
    const cart = await addToCart(item, quantity);
    setCart(cart);
  };

  return (
    <StyledCartItems>
      {/* If there are items in the cart - map through them */}
      {cart.items ? (
        cart.items.map((item, index) => {
          const product = products.find((product) => product._id === item._id);
          if (!product) return null;
          return (
            <CartItem key={item._id}>
              <Link to={`/products/${product._id}`}>
                <Image product={product} url={product.images[0]} />
              </Link>
              <ProductInfo>
                <div>
                  <Link to={`/products/${product._id}`}>
                    <p>{product ? product.title : "Unknown"}</p>
                    <p>{product ? product.artist : "Unknown"}</p>
                  </Link>
                  <Quantity
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                    item={item}
                    small
                  ></Quantity>
                </div>
                <div>
                  <p>£{product ? product.price : "Unknown"}</p>
                  <button onClick={() => handleRemoveFromCart(item._id, true)}>
                    Remove
                  </button>
                </div>
              </ProductInfo>
              <HorizontalDivider bottom />
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
