import * as config from "../../Config";

export const createOrder = async (formData: any, cart: any) => {
  const data = { formData, cart };
  const response = await fetch(`${config.API_BASE_URL}/orders`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  });
  // Return inserted orderId
  return await response.json();
};

// const addToCart = async (clickedItem: IProduct, quantity?: number) => {
//   const data = {
//     userId: localStorage.getItem("randid"),
//     productId: clickedItem._id,
//     quantity: quantity ? quantity : 1,
//     title: clickedItem.title,
//     price: clickedItem.price,
//   };

//   const cartId = await fetch(`${config.API_BASE_URL}/cart`, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { "content-type": "application/json" },
//   })
//     .then((res) => res.json())
//     .then((data) => data);
//   const cart = await getCartById(cartId);
//   setCart(cart);
// };
