import axios from 'axios';

export const fetchProducts = async () => {
	return await axios.get('https://fakestoreapi.com/products');
};

export const fetchProduct = async (productId) => {
	return await axios.get(`https://fakestoreapi.com/products/${productId}`);
};

export const fetchProductCategories = async () => {
	return await axios.get(`https://fakestoreapi.com/products/categories`);
};
