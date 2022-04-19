import { createContext, useState } from "react";
import { ICheckoutForm } from "../Interfaces";

const CheckoutContext = createContext<IState>({} as IState);

interface IState {
  formData: ICheckoutForm;
  setFormData: React.Dispatch<React.SetStateAction<ICheckoutForm>>;
}

export const CheckoutProvider = ({ children }: any) => {
  const [formData, setFormData] = useState<ICheckoutForm>({} as ICheckoutForm);

  return (
    <CheckoutContext.Provider value={{ formData, setFormData }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContext;
