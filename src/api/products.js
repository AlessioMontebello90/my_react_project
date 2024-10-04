import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

// Funzione per ottenere tutti i prodotti
export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Funzione per ottenere i dettagli di un singolo prodotto
export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
