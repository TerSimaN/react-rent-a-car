import axios from "axios";
import { getAllUsers } from "./UserService";

const apiUrl = 'http://localhost:3000';

export function getLoggedUser() {
    return JSON.parse(localStorage.getItem('loggedUser'));
}

export async function login(userData) {
    const users = (await getAllUsers()).data;

    const loggedUser = users.find(u => u.username === userData.username && u.password.toString() === userData.password);

    if (loggedUser) {
        localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
        return;
    }

    throw new Error('Invalid username/password!');
}

export async function register(userData) {
    const users = (await getAllUsers()).data;

    if (users.find(u => u.email === userData.email)) {
        throw new Error('Email already exists!');
    }

    userData = {
        ...userData,
        isAdmin: false
    };

    return axios.post(`${apiUrl}/users`, userData);
}

export function logout() {
    localStorage.removeItem('loggedUser');
}