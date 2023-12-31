import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    diagnostico: [{
        tipo: String,
        resultado: Boolean
    }],
    tipoDiagnostico: {
        type: String,
        default: null
    }
});

export default mongoose.model('User', userSchema);