import axios from 'axios';

axios.defaults.headers.common['Origin'] = 'http://localhost:3000'; // Replace with your origin
const API_BASE_URL = 'http://20.244.56.144/test'; // Replace with actual API base URL
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3NTEwNjgwLCJpYXQiOjE3MTc1MTAzODAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ5NGVhNjQ2LWY4ZDktNGY2YS05ZmVkLWE2ZDg2YzE5ZTQxOCIsInN1YiI6ImFhcnlhbjAwMTguYmUyMUBjaGl0a2FyYS5lZHUuaW4ifSwiY29tcGFueU5hbWUiOiJhYXJ5YW4iLCJjbGllbnRJRCI6ImQ5NGVhNjQ2LWY4ZDktNGY2YS05ZmVkLWE2ZDg2YzE5ZTQxOCIsImNsaWVudFNlY3JldCI6InN5WVBiclhGd2d3ZnRvVHAiLCJvd25lck5hbWUiOiJBYXJ5YW4iLCJvd25lckVtYWlsIjoiYWFyeWFuMDAxOC5iZTIxQGNoaXRrYXJhLmVkdS5pbiIsInJvbGxObyI6IjIxMTA5OTAwMTgifQ.CwzT6YAzdAd0tZ8sscGhSrsM2Ce5FlP_IJOTJwC5e_A'; // Replace with your actual auth token

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Authorization': `Bearer ${AUTH_TOKEN}`
    }
});

export const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
    try {
        const response = await apiClient.get(`/companies/${company}/categories/${category}/products`, {
            params: {
                top,
                minPrice,
                maxPrice
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products', error);
        return [];
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await apiClient.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product', error);
        return null;
    }
};
