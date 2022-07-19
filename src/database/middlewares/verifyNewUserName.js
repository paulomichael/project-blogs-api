const verifyNewUserName = async (req, res, next) => {
   try {
    const { displayName } = req.body;
    const MINIMUM_NAME_LENGTH = 8;
    if (!displayName || displayName.length < MINIMUM_NAME_LENGTH) {
       return res
          .status(400)
          .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    next();
   } catch (error) {
      next(error);
    }
};

module.exports = verifyNewUserName;
