require('./config/config');

const express = require('express');
const moongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


// bodyParse para el proceso de peticiones
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

// Configuración global de rutas
app.use(require('./routes/login'));
app.use(require('./routes/usersType'));
app.use(require('./routes/users'));


cadConect = 'mongodb+srv://josefl19:OKIaPlJ0EWur6GmI@cluster0-bskzs.mongodb.net/classroom?retryWrites=true&w=majority';
moongoose.connect(cadConect, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', 3000);
});