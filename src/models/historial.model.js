import mongoose from 'mongoose';

const historialSchema = new mongoose.Schema({
    userid: {
        type: String,
    },
    preguntas: [{
        pregunta: String,
        respuesta: String,
    }],
    diagnóstico: [{
        tipo: String,
        resultado: Boolean,
    }],
    fecha: {
        type: Date,
    },
});

export default mongoose.model('Historial', historialSchema);