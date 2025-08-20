/* eslint-env node */
/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';

// Use env loaded by backEnd/index.js
const secretKey = (typeof process !== 'undefined' && process.env) ? process.env.JWT_SECRET : undefined;

const authenticationToken = async (req, res, next) => {
    try {
        // Normalize header name and parse Bearer token
        const authHeader = req.headers?.authorization || req.headers?.Authorization;
        if (!authHeader) return res.status(401).send({ message: "Access Denied: Missing Authorization header" });

        let token = authHeader;
        if (authHeader.startsWith('Bearer ')) {
            token = authHeader.slice(7).trim();
        }
        if (!token) return res.status(401).send({ message: "Access Denied: Missing token" });

        if (!secretKey) {
            return res.status(500).send({ message: "Server misconfiguration: missing JWT secret" });
        }

        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) return res.status(401).send({ message: "Invalid Token" });
            req.user = decoded;
            next();
        });
    } catch (e) {
        return res.status(500).send({ message: e?.message || 'Authentication failed' });
    }
};
export default authenticationToken;