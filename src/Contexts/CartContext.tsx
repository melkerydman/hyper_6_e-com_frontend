import userEvent from "@testing-library/user-event";
import { createContext, useEffect, useState } from "react";
import { ICart, ICartItem } from "../Interfaces";
import { getCartFromDb } from "../Services";

const CartContext = createContext<IState>({} as IState);

interface IState {
  cart: ICart;
  setCart: React.Dispatch<React.SetStateAction<ICart>>;
  cartIdFromSession?: string;
}

const cartIdFromSession = sessionStorage.getItem("cartId")?.replaceAll('"', "");

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<ICart>({
    isShowing: false,
    items: [] as ICartItem[],
    totalQuantity: 0,
  });
  return (
    <CartContext.Provider value={{ cart, setCart, cartIdFromSession }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
