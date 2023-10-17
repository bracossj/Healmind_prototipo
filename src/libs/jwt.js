import { token_secret } from '../config.js';
import jwt from 'jsonwebtoken';

export function createAccesToken(paylod) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            paylod,
            token_secret,
            {
                expiresIn: '1d'
            },
            (err, token) => {
                if (err) reject(err);
                resolve(token)
            }
        );
    })
}
