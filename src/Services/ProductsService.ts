import * as config from "../Config/config";

const headers = {
  "content-type": "application/json",
};

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${config.API_BASE_URL}/products`, {
      headers,
    });
    return await response.json();
  } catch (error) {
    return [];
  }
};
export const getSpecificProduct = async (id: string) => {
  try {
    const response = await fetch(`${config.API_BASE_URL}/products/${id}`, {
      headers,
    });
    return await response.json();
  } catch (error) {
    return [];
  }
};
