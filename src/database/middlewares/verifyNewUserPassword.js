const verifyNewUserPassword = async (req, res, next) => {
   try {
      const { password } = req.body;
      const MINIMUM_PASSWORD_LENGTH = 6;
      if (!password || password.length < MINIMUM_PASSWORD_LENGTH) {
         return res
            .status(400)
            .json({ message: '"password" length must be at least 6 characters long' });
        }
      next();
   } catch (error) {
      next(error);
    }
};

module.exports = verifyNewUserPassword;
