import jwt from 'jsonwebtoken';

export function signToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
}

export function verifyToken(token) {
    try {
        const result = jwt.verify(token, process.env.JWT_SECRET);
        return result;
    } catch (err) {
        return null;
    }
}

