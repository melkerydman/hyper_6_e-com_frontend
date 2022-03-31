import * as config from "../Config/config";
import { ICart } from "../Interfaces";

export const addCartToDb = (cart: ICart) => {
  return fetch(`${config.API_BASE_URL}/cart`, {
    method: "POST",
    body: JSON.stringify({ ...cart }),
    headers: { "content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      // Return cartId as string
      return JSON.stringify(data.id);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getCartFromDb = (cartId: string) => {
  return fetch(`${config.API_BASE_URL}/cart/${cartId}`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data after reload: ", data);
      return data;
    });
};

export const updateCartInDb = (cart: ICart, cartId: string) => {
  fetch(`${config.API_BASE_URL}/cart/${cartId}`, {
    method: "PATCH",
    body: JSON.stringify({
      cart,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).catch((err) => {
    console.error(err);
  });
};
