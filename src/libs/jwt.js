import { token_secret } from '../config.js';
import jwt from 'jsonwebtoken';

export function createAccesToken(paylod) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            paylod,
            token_secret,
            {
                expiresIn: '2h'
            },
            (err, token) => {
                if (err) reject(err);
                resolve(token)
            }
        );
    })
}
