import { CartItems, CheckoutForm } from "../../Components";
import { Main } from "../../Layout";
import { Wrapper } from "./styled";
import { CartContext, ProductContext } from "../../Contexts/";
import { useContext, useState } from "react";
import { Button } from "../../Components";
import { createOrder } from "../../Services";
import { ICartItem } from "../../Interfaces";
import { useNavigate } from "react-router-dom";

const Checkout = (): JSX.Element => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const orderData = { firstName, lastName, postalCode };

    // Create new order and receive id of that order
    const orderId = await createOrder(orderData, cart);
    console.log("returned orderId: ", orderId);

    setFirstName("");
    setLastName("");
    setPostalCode("");
    setCart({ items: [] as ICartItem[], totalQuantity: 0, totalPrice: 0 });
    navigate("/success");
  };
  return (
    <Main>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="name"
              name="firstName"
              id="firstName"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="name"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </div>
          <div></div>
          <Button>Place order</Button>
        </form>
        <CartItems cart={cart} products={products}></CartItems>
      </Wrapper>
    </Main>
  );
};

export default Checkout;
