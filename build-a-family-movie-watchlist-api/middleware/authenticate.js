import { isTokenBlacklisted } from "../utils/blacklist.js";

export default function authenticate(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(401).json({ "error": "No token provided." });
    }

    if (isTokenBlacklisted(authorization)) {
        res.status(401).json({ "error": "Invalid or expired token." });
    }

    req.user = JSON.parse(authorization);

    next();
}