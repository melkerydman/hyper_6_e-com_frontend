import { createContext, useState } from "react";
import { ICart, ICartItem, IProduct } from "../Interfaces";
import * as config from "../Config";

const CartContext = createContext<IState>({} as IState);

interface IState {
  cart: ICart;
  setCart: React.Dispatch<React.SetStateAction<ICart>>;
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  removeItemFromCart: Function;
  addToCart: (clickedItem: IProduct, quantity?: number | undefined) => void;
}

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

export const CartProvider = ({ children }: any) => {
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState<ICart>(
    cartFromLocalStorage.items
      ? cartFromLocalStorage
      : { items: [] as ICartItem[], totalQuantity: 0 }
  );

  const addToCart = async (clickedItem: IProduct, quantity?: number) => {
    const data = {
      userId: localStorage.getItem("randid"),
      productId: clickedItem._id,
      quantity: quantity ? quantity : 1,
    };

    console.log(data);
    console.log("adding data");

    const cartId = await fetch(`${config.API_BASE_URL}/cart`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => data);
    const cart = await getCartById(cartId);
    setCart(cart);
    console.log("cart: ", cart);
  };

  const getCartById = async (id: string) => {
    return await fetch(`${config.API_BASE_URL}/cart/${id}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Content in cart from DB: ", data);
        return data;
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
        // cartIdFromSession,
        openCart,
        setOpenCart,
        removeItemFromCart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
