import axios from "axios";

export const fetchApiTodo = async () => {
  const { data } = await axios.get("https://dummyjson.com/products");
  if (data) {
    return data;
  }
};

export const postData = async (params) => {
  const { data } = await axios.post("https://dummyjson.com/products", {
    productName: params.productName,
    price: params.price,
  });

  return data;
};
