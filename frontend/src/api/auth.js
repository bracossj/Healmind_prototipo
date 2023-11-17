import axios from './axios.js';

export const registerRequest = user => axios.post(`/register`, user);

export const loginRequest = user => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get('/verify');

export const logoutRequest = () => axios.post('/logout');

export const obtenerProfesionales = async () => {
    try {
        const response = await axios.get('/verprofesionales');
        return response.data.professionals;
    } catch (error) {
        console.error('Error al obtener profesionales:', error);
        throw error;
    }
};