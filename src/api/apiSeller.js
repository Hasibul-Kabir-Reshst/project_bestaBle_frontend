import axios from "axios";
import { API } from "../utilities/config";

export const createCategory = (token, data) => {
    return axios.post(`${API}/category`, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}

export const addService = (token, data) => {
    return axios.post(`${API}/service`, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}

export const getCategories = () => {
    return axios.get(`${API}/category`)
}