import { useContext } from "react";
import { CheckoutContext } from "../../Contexts";
import { Button } from "../Button";
import { StyledInput } from "../../Components";
import { InputWrapper, StyledForm } from "./styled";

interface IProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const CheckoutForm: React.FC<IProps> = ({
  handleChange,
  handleSubmit,
}): JSX.Element => {
  const { formData } = useContext(CheckoutContext);
  const {
    firstName,
    lastName,
    country,
    street,
    city,
    postalCode,
    phone,
    email,
  } = formData;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputWrapper>
        <StyledInput
          type="name"
          name="firstName"
          id="firstName"
          placeholder="First name"
          value={firstName}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="name"
          name="lastName"
          id="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="text"
          name="country"
          id="country"
          placeholder="Country"
          value={country}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="text"
          name="street"
          id="street"
          placeholder="Street"
          value={street}
          onChange={handleChange}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <StyledInput
          type="text"
          name="city"
          id="city"
          placeholder="City"
          value={city}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="Postal Code"
          value={postalCode}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          value={phone}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />
      </InputWrapper>
      <Button style={{ marginTop: "1rem" }}>Place order</Button>
    </StyledForm>
  );
};

export default CheckoutForm;
