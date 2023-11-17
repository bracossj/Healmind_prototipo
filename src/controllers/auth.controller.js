import User from '../models/user.model.js';
import Professional from '../models/professional.model.js';
import bcrypt from 'bcryptjs';
import { createAccesToken } from '../libs/jwt.js';
import jwt from 'jsonwebtoken';
import { token_secret } from '../config.js';

export const register = async (req, res) => {
    const { name, lastname, age, email, password } = req.body;

    try {
        const UseremailFound = await User.findOne({ email });
        if (UseremailFound) return res.status(400).json(["La direccion de correo ya se encuentra registrada"]);

        const passwordhash = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            lastname,
            age,
            email,
            password: passwordhash
        });

        const userSaved = await newUser.save();
        const token = await createAccesToken({ id: userSaved._id });
        res.cookie("token", token);
        res.json({
            id: userSaved._id,
            name: userSaved.name,
            lastname: userSaved.lastname,
            age: userSaved.age,
            email: userSaved.email
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const UserFound = await User.findOne({ email });
        if (!UserFound) return res.status(400).json(["Este correo no se encuentra registrado"]);

        const coincide = await bcrypt.compare(password, UserFound.password);
        if (!coincide) return res.status(400).json(["Contraseña incorrecta"]);

        const token = await createAccesToken({ id: UserFound._id });
        res.cookie("token", token);
        res.json({
            id: UserFound._id,
            email: UserFound.email
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    });

    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);

    if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });

    return res.json({
        id: userFound.id,
        name: userFound.name,
        lastname: userFound.lastname,
        age: userFound.age,
        email: userFound.email
    });
}

// Professionals

export const registerP = async (req, res) => {
    const { name, lastname, email, password } = req.body

    try {
        const professionalemailFound = await Professional.findOne({ email });
        if (professionalemailFound) return res.status(400).json({ message: "La direccion de correo ya se encuentra registrada" });

        const passwordhash = await bcrypt.hash(password, 10);

        const newProfessional = new Professional({
            name,
            lastname,
            email,
            password: passwordhash
        });

        const professionalSaved = await newProfessional.save();
        const token = await createAccesToken({ id: professionalSaved._id });
        res.cookie("token", token);
        res.json({
            id: professionalSaved._id,
            name: professionalSaved.name,
            lastname: professionalSaved.lastname,
            email: professionalSaved.email
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// VERIFICAR TOKEN

export const verifyToken = async (req, res) => {
    const { token } = req.cookies

    if (!token) return res.status(401).json({ message: "No autorizado" });

    jwt.verify(token, token_secret, async (err, user) => {
        if (err) return res.status(401).json({ message: "No autorizado" });

        const userFound = await User.findById(user.id);
        if (!userFound) return res.status(401).json({ message: "No autorizado" });

        return res.json({
            id: userFound._id,
            name: userFound.name
        });
    });
};