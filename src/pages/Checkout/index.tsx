import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Main } from "../../Components";
import { Wrapper } from "./styled";
import { CartContext, ProductContext, CheckoutContext } from "../../Contexts/";
import { CartItems, CheckoutForm } from "../../Components";
import { createOrder } from "../../Services";
import { ICartItem, ICheckoutForm } from "../../Interfaces";

const Checkout: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const { formData, setFormData } = useContext(CheckoutContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create new order and receive id of that order
    try {
      const orderId = await createOrder(formData, cart);
      console.log("returned orderId: ", orderId);
      // Reset cart and form and navigate to success page
      setFormData({} as ICheckoutForm);
      setCart({ items: [] as ICartItem[], totalQuantity: 0, totalPrice: 0 });
      navigate("./success");
    } catch (err) {
      console.log(err);
      navigate("./error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Main>
      <Wrapper>
        <CheckoutForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        ></CheckoutForm>
        <CartItems cart={cart} products={products}></CartItems>
      </Wrapper>
    </Main>
  );
};

export default Checkout;
