const express = require('express');

const loginController = require('./database/controllers/loginController');
// ...

const app = express();

app.use(express.json());

app.post('/login', loginController);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
