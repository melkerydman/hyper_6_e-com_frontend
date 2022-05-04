import { IProduct } from "../../Interfaces";
import * as config from "../../Config";

export const addToCart = async (item: IProduct, quantity?: number) => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

  const data = {
    cartId: cartFromLocalStorage._id,
    productId: item._id,
    quantity: quantity ? quantity : 1,
    title: item.title,
    price: item.price,
  };

  try {
    const cartId = await fetch(`${config.API_BASE_URL}/cart`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => data);

    return await getCartById(cartId.upsertedId ? cartId.upsertedId : cartId);
  } catch (err) {
    console.log(err);
  }
};

export const getCartById = async (id: string) => {
  console.log("id", id);
  try {
    return await fetch(`${config.API_BASE_URL}/cart/${id}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Content in cart from DB: ", data);
        return data;
      });
  } catch (err) {
    console.log(err);
  }
};

export const removeFromCart = async (productId: string, clear?: boolean) => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

  const data = {
    cartId: cartFromLocalStorage._id,
    productId: productId,
    clear: clear,
  };
  try {
    const cartId = await fetch(`${config.API_BASE_URL}/cart`, {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => data);

    return await getCartById(cartId);
  } catch (err) {
    console.log(err);
  }
};
