import mongoose from 'mongoose';

const historialSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    preguntas: [{
        pregunta: String,
        respuesta: String,
    }],
    diagnostico: {
        tipo: String,
        resultado: Boolean,
    },
});

export default mongoose.model('Historial', historialSchema);