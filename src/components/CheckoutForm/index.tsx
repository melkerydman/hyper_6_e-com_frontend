import { Button } from "../Button/Button.elements";

const CheckoutForm: React.FC = (): JSX.Element => {
  return (
    <form>
      <div>
        <input
          type="name"
          name="firstName"
          id="firstName"
          placeholder="First name"
          required
        />
        <input
          type="name"
          name="lastName"
          id="lastName"
          placeholder="Last name"
          required
        />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="Postal Code"
          required
        />
      </div>
      <div></div>
      <Button>Place order</Button>
    </form>
  );
};

export default CheckoutForm;
