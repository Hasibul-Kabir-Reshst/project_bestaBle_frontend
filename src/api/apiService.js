import axios from "axios";
import { API } from "../utilities/config";


export const getServices = (sortBy, order, limit) => {
    return axios.get(`${API}/service?sortBy=${sortBy}&order=${order}&limit=${limit}`)
}
export const getServiceDetails = (id) => {
    return axios.get(`${API}/service/${id}`)
}

export const getCategories = () => {
    return axios.get(`${API}/category`)
}

export const getFilteredServices = (skip, limit, filters = {}, order, sortBy) => {
    const data = {
        order: order,
        sortBy: sortBy,
        limit: limit,
        skip: skip,
        filters: { ...filters }
    }
    return axios.post(`${API}/service/filter`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}