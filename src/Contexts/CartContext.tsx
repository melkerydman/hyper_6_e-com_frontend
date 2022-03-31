import userEvent from "@testing-library/user-event";
import { createContext, useEffect, useState } from "react";
import { ICart, ICartItem, IProduct } from "../Interfaces";
import { getCartFromDb } from "../Services";

const CartContext = createContext<IState>({} as IState);

interface IState {
  cart: ICart;
  setCart: React.Dispatch<React.SetStateAction<ICart>>;
  cartIdFromSession?: string;
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  addItemToCart: (clickedItem: IProduct) => void;
  removeItemFromCart: Function;
}

const cartIdFromSession = sessionStorage.getItem("cartId")?.replaceAll('"', "");

export const CartProvider = ({ children }: any) => {
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState<ICart>({
    isShowing: false,
    items: [] as ICartItem[],
    totalQuantity: 0,
  });

  const addItemToCart = (clickedItem: IProduct, passedQuantity?: number) => {
    setCart((prev) => {
      const itemAlreadyInCart = prev.items.find(
        (item) => item._id === clickedItem._id
      );

      // If item doesn't exist in cart, add it
      if (!itemAlreadyInCart) {
        return {
          ...prev,
          // If specific quantity has been passed increase totalQuantity with that, otherwise increment by one
          totalQuantity: passedQuantity
            ? prev.totalQuantity + passedQuantity
            : prev.totalQuantity + 1,
          // If specific quantity has been passed increase quantity with that, otherwise increment by one
          items: [
            ...prev.items,
            { ...clickedItem, quantity: passedQuantity ? passedQuantity : 1 },
          ],
        };
      }
      return {
        ...prev,
        totalQuantity: passedQuantity
          ? prev.totalQuantity + passedQuantity
          : prev.totalQuantity + 1,
        items: prev.items.map((item) =>
          item._id === clickedItem._id && item.quantity
            ? {
                ...item,
                quantity: passedQuantity
                  ? item.quantity + passedQuantity
                  : item.quantity + 1,
              }
            : item
        ),
      };
    });
  };

  const removeItemFromCart = (id: string) => {
    setCart((prev) => {
      return {
        ...prev,
        totalQuantity: prev.totalQuantity - 1,
        items: prev.items.reduce((acc, item) => {
          if (item._id === id) {
            if (item.quantity === 1) return acc;
            return [...acc, { ...item, quantity: item.quantity! - 1 }];
          } else {
            return [...acc, item];
          }
        }, [] as ICartItem[]),
      };
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartIdFromSession,
        openCart,
        setOpenCart,
        addItemToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
