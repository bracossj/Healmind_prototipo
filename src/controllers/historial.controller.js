import Historial from '../models/historial.model.js';

export const createHistorial = async (req, res) => {
    const { userid, preguntas, diagnóstico } = req.body;

    try {
        const nuevoHistorial = new Historial({
            userid,
            preguntas,
            diagnóstico
        });
        await nuevoHistorial.save();
    } catch (error) {
        console.error('Error al crear el historial:', error);
    }
};

export const getDiagnosticosByUserId = async (req, res) => {
    const { userId } = req.params;

    try {
        const diagnosticos = await Historial.find({ userid: userId });
        res.json({ diagnosticos });
    } catch (error) {
        console.error('Error al obtener los diagnósticos:', error);
        return null;
    }
};

