import { createContext, useState } from "react";
import { ICart, ICartItem } from "../Interfaces";

const CartContext = createContext<IState>({} as IState);

interface IState {
  cart: ICart;
  setCart: React.Dispatch<React.SetStateAction<ICart>>;
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

export const CartProvider = ({ children }: any) => {
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState<ICart>(
    cartFromLocalStorage.items
      ? cartFromLocalStorage
      : { items: [] as ICartItem[], totalQuantity: 0, totalPrice: 0 }
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        openCart,
        setOpenCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
