const express = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/users');
const app = express();

app.post('/login', (req, res) => {
    let body = req.body;
    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario y/o contraseña incorrectos'
                }
            });
        }


        if (body.password != usuarioDB.password) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario y/o contraseña incorrectos'
                }
            });
        }

        let token = jwt.sign({
            usuario: usuarioDB
        }, 'semilla-de-token', { expiresIn: 60 * 60 * 24 * 30 });

        res.json({
            ok: true,
            usuario: usuarioDB,
            token
        });

    });
});

module.exports = app;