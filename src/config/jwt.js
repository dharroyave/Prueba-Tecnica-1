import dotenv from 'dotenv';
import jsonwebtoken from 'jsonwebtoken';

dotenv.config();
const key = process.env.SECRET_KEY;

export const generateToken = (payload) => {
    return new Promise((resolve, reject) => {
        // .sign -> genera un token
        jsonwebtoken.sign(payload, key, { expiresIn: '1h' }, (error, token) => {
            if (error) {
                reject(new Error('Error generando JWT', error.message));
            } else {
                resolve(token);
            }
        })
    });
}

export const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken.verify(token, key, (error, decoded) => {
            if (error) {
                reject(new Error('Hubo un error al verificar el JWT', error.message));
            } else {
                resolve(decoded);
            }
        })
    });
}