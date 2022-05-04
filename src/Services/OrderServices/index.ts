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

export const getAllOrders = async () => {
  const response = await fetch(`${config.API_BASE_URL}/orders`);
  return await response.json();
};
