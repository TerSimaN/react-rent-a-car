import axios from 'axios';
import { getLoggedUser } from './AuthService';

const apiUrl = 'http://localhost:3000';

export function getAllRents() {
    return axios.get(`${apiUrl}/rents`);
}

export function getRentById(id) {
    return axios.get(`${apiUrl}/rents/${id}`);
}

export function saveRent(rentData) {
    if (rentData.id) {
        return axios.put(`${apiUrl}/rents/${rentData.id}`, rentData);
    }

    rentData = {
        ...rentData,
        customer: getLoggedUser().name
    }

    return axios.post(`${apiUrl}/rents`, rentData);
}

export function deleteRent(id) {
    return axios.delete(`${apiUrl}/rents/${id}`);
}