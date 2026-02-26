import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // your DRF API endpoint

export const getSlots = () => axios.get(`${API_URL}slots/`);
export const addSlot = (slot) => axios.post(`${API_URL}/slots/`, slot);
export const parkVehicle = (data) => axios.post(`${API_URL}/park/`, data);
export const removeVehicle = (id) => axios.post(`${API_URL}/remove/${id}/`);