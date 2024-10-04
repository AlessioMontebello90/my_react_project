import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products'; // API pubblica di esempio

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
