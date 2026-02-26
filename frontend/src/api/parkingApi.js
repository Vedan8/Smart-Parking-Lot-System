import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // your DRF API endpoint

export const getSlots = () => axios.get(`https://smart-parking-lot-system-qplm.onrender.com/api/slots/`);
export const addSlot = (slot) => axios.post(`https://smart-parking-lot-system-qplm.onrender.com/api/slots/`, slot);
export const parkVehicle = (data) => axios.post(`https://smart-parking-lot-system-qplm.onrender.com/api/park/`, data);
export const removeVehicle = (id) => axios.post(`https://smart-parking-lot-system-qplm.onrender.com/api/remove/${id}/`);