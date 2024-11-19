import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  };
  
  export const createProduct = async (productData) => {
    const response = await axios.post(`${API_URL}/products`, productData);
    return response.data;
  };
  
  export const updateProduct = async (id, productData) => {
    const response = await axios.put(`${API_URL}/products/${id}`, productData);
    return response.data;
  };
  
  export const deleteProduct = async (id) => {
    await axios.delete(`${API_URL}/products/${id}`);
  };