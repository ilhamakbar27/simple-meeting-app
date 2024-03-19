const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY || ""

const createToken = (payload) => jwt.sign(payload, secretKey , {expiresIn: "1hr"} );
const verifyToken = (token) => jwt.verify(token, secretKey);

module.exports = {createToken, verifyToken} 