import { Button } from "../Button";

// FORM FIELDS
// First name
// Last name
// Country
// Street

// City
// Postcode
// Phone
// Email

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
          name="country"
          id="country"
          placeholder="Country"
          required
        />
        <input
          type="text"
          name="street"
          id="street"
          placeholder="Street"
          required
        />
      </div>
      <div>
        <input type="text" name="city" id="city" placeholder="City" required />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="Postal Code"
          required
        />
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>
      <Button>Place order</Button>
    </form>
  );
};

export default CheckoutForm;
