import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        unique: true
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
    diagnostico: {
        type: Boolean,
        default: false
    },
    tipoDiagnostico: {
        type: String,
        default: null
    }
});

export default mongoose.model('User', userSchema);