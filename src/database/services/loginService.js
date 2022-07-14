const { User } = require('../models');

const verifyUser = async (email, password) => {
  if (!email || !password) {
    return { status: 400, message: 'Some required fields are missing' };
   }
   const user = await User.findOne({ where: { email, password } });
   if (!user) {
     return { status: 400, message: 'Invalid fields' };
   }
   if (!user.dataValues) {
     return { status: 401, message: 'Invalid fields' };
   }
   return user.dataValues;
};

module.exports = {
   verifyUser,
};
