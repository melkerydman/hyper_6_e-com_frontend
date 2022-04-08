import { useContext } from "react";
import { CartContext } from "../Contexts";
import { IProduct } from "../Interfaces";
import * as config from "../Config";

export const useCart = () => {
  const { setCart } = useContext(CartContext);

  const addToCart = async (clickedItem: IProduct, quantity?: number) => {
    const data = {
      userId: localStorage.getItem("randid"),
      productId: clickedItem._id,
      quantity: quantity ? quantity : 1,
      title: clickedItem.title,
      price: clickedItem.price,
    };
    console.log(data);

    const cartId = await fetch(`${config.API_BASE_URL}/cart`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => data);
    const cart = await getCartById(cartId);
    setCart(cart);
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

  const removeItemFromCart = async (id: string, clear?: boolean) => {
    const data = {
      userId: localStorage.getItem("randid"),
      productId: id,
      clear: clear,
    };
    const cartId = await fetch(`${config.API_BASE_URL}/cart`, {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => data);
    const cart = await getCartById(cartId);
    setCart(cart);
  };

  const emptyCart = () => {};

  return { addToCart, getCartById, removeItemFromCart, emptyCart };
};
