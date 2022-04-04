import * as config from "../Config";

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
    console.log(error);
    return error;
  }
};

// fetch(`${API_BASE_URL}/dogs/${params.id}`, {
//   headers: { "content-type": "application/json" },
// })
//   .then((response) => {
//     if (!response.ok) {
//       console.log(response.status);
//       throw Error(response.status);
//     } else {
//       return response.json();
//     }
//   })
//   .then((json) => {
//     setDog(json);
//     setError(null);
//   })
//   .catch((err) => {
//     setError(err.message);
//   });
