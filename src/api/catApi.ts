import axios from 'axios';
import type {Cat} from "../types/types";

const apiClient = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    headers: {
        'x-api-key': import.meta.env.VITE_CAT_API_KEY
    }
});

export const getCats = async (page: number) => {
    const response = await apiClient.get<Cat[]>(`/images/search?limit=15&page=${page}&order=ASC`);
    return response.data;
};