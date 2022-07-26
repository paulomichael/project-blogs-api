const express = require('express');

const loginController = require('./database/controllers/loginController');
const userController = require('./database/controllers/userController');
const categoryController = require('./database/controllers/categoryController');
const postController = require('./database/controllers/postController');
const verifyNewUserName = require('./database/middlewares/verifyNewUserName.js');
const verifyNewUserPassword = require('./database/middlewares/verifyNewUserPassword.js');
const verifyNewUserEmail = require('./database/middlewares/verifyNewUserEmail.js');
const verifyBlogPostFields = require('./database/middlewares/verifyBlogPostFields');
const validateJWT = require('./database/auth/validateJWT');

const app = express();

app.use(express.json());

app.post('/login', loginController);
app.post('/user', 
  verifyNewUserName, 
  verifyNewUserPassword, 
  verifyNewUserEmail, 
  userController.createUser);
app.get('/user', validateJWT, userController.getAllUsers);
app.get('/user/:id', validateJWT, userController.getUserById);
app.post('/categories', validateJWT, categoryController.createCategory);
app.get('/categories', validateJWT, categoryController.getAllCategories);
app.post('/post', verifyBlogPostFields, validateJWT, postController.createBlogPost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
