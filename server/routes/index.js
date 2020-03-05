const express = require('express');

const app = express();

app.use(require('./users'));
app.use(require('./login'));
app.use(require('./usersType'));
app.use(require('./activities'));
app.use(require('./advertisement'));
app.use(require('./commentActivity'));
app.use(require('./commentAdvertisment'));
app.use(require('./course'));
app.use(require('./delivery'));
app.use(require('./schedule'));

module.exports = app;