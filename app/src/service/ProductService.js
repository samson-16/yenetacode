import axios from "axios";
import { URL } from "../../config";

export const getAllProductService = async () => {
  return await axios.get(`${URL}products`);
};
export const getProductByIdService = async (id) => {
  return await axios.get(`${URL}products/${id}`);
};
export const addProductService = async (value) => {
  return await axios.post(`${URL}products`, value);
};
export const updateProductService = async (value) => {
  return await axios.put(`${URL}products`, value);
};
export const deleteProductService = async (id) => {
  return await axios.delete(`${URL}products/${id}`);
};
