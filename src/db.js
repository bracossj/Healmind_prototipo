import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const mongoDBURI = process.env.MONGODB_URI;

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoDBURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('---Database is connect---')
    } catch (error) {
        console.log(error);
    }
}