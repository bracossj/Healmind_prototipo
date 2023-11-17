import axios from './axios.js';

export const guardarDiagnostico = async (userid, preguntas, diagnóstico) => {
    try {
        const response = await axios.post(`/diagnosticonew`, {
            userid,
            preguntas,
            diagnóstico,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const obtenerDiagnosticos = async (userId) => {
    try {
        const response = await axios.get(`/verdiagnosticos/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los diagnósticos:', error);
        throw error;
    }
};