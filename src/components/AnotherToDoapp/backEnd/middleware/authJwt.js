import jwt from 'jsonwebtoken';





const secretKey = (typeof process !== 'undefined' && import.meta.process.env) ? import.meta.process.env.JWT_SECRET : undefined;
const authenticationToken = async (req, res, next) => {
    let token = req.header('authorization');
    if (!token) return res.status(401).send({ message: "Access Denied" });
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) return res.status(401).send({ message: "Invalid Token" });
        req.user = decoded;
        next();
    })
};
export default authenticationToken;