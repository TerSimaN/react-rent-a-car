import axios from 'axios';
import { register } from './AuthService';

const apiUrl = 'http://localhost:3000';

export function getAllUsers() {
    return axios.get(`${apiUrl}/users`);
}

export function getUserById(id) {
    return axios.get(`${apiUrl}/users/${id}`);
}

export function saveUser(userData) {
    if (userData.id) {
        return axios.put(`${apiUrl}/users/${userData.id}`, userData);
    }

    return register(userData);
}

export function deleteUser(id) {
    return axios.delete(`${apiUrl}/users/${id}`);
}