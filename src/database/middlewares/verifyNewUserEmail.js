const verifyNewUserEmail = async (req, res, next) => {
   try {
      const { email } = req.body;
      const re = /\S+@\S+\.\S+/;
      if (!email || !re.test(email)) {
       return res
          .status(400)
          .json({ message: '"email" must be a valid email' });
      }
    next();
   } catch (error) {
      next(error);
    }
};

module.exports = verifyNewUserEmail;
