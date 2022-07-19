const express = require('express');

const loginController = require('./database/controllers/loginController');
const userController = require('./database/controllers/userController');
const verifyNewUserName = require('./database/middlewares/verifyNewUserName.js');
const verifyNewUserPassword = require('./database/middlewares/verifyNewUserPassword.js');
const verifyNewUserEmail = require('./database/middlewares/verifyNewUserEmail.js');
// ...

const app = express();

app.use(express.json());

app.post('/login', loginController);
app.post('/user', 
  verifyNewUserName, 
  verifyNewUserPassword, 
  verifyNewUserEmail, 
  userController.createUser);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
