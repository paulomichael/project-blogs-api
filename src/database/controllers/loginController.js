const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

 module.exports = async (req, res) => {
   try {
     const { email, password } = req.body;
     const verification = await loginService.verifyUser(email, password);
    if (!verification.id) {
      return res.status(verification.status).json({ message: verification.message });
    }
    const token = jwt.sign({ data: email }, secret, jwtConfig);
    res.status(200).json({ token });
   } catch (err) {
     return res.status(500).json({ message: 'Internal error', error: err.message });
   }
};
