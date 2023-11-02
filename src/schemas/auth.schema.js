import { z } from 'zod';

export const registerSchema = z.object({
    name: z.string({
        required_error: "Nombre requerido"
    }),
    lastname: z.string({
        required_error: "Apellido requerido"
    }),
    age: z.string({
        required_error: "Edad requerida"
    }),
    email: z.string({
        required_error: "Correo requerido"
    }).email({
        required_error: "Correo invalido"
    }),
    password: z.string({
        required_error: "Contraseña requerida"
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: "Correo requerido"
    }).email({
        required_error: "Correo invalido"
    }),
    password: z.string({
        required_error: "Contraseña requerida"
    })
})