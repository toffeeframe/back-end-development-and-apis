import express from "express";
import jwt from "jsonwebtoken";
import { randomUUID } from "node:crypto";
import { findByUsername } from "../utils/db.js";
import { json } from "node:stream/consumers";

const router = express.Router();

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({ "error": "missing username and/or password" });
    }

    const user = findByUsername(username);

    if (!user) {
        res.status(401).json({ "error": "User with that username does not exist" });
    }

    if (user._password !== password) {
        res.status(401).json({ "error": "Wrong password for the user with that username" });
    }

    const userData = {
        id: randomUUID(),
        username,
        password,
        token: jwt.sign("", process.env.JWT_TOKEN) // ??
    };

    res.status(200).json(userData);
});

export default router;
