const express = require('express');
let User = require('../models/users');
let { verificaToken } = require('../middlewares/autenticacion');
const _ = require('underscore');

let app = express();

app.get('/usuario', verificaToken, function(req, res) {
    User.find({})
        .exec((err, usuarios) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                usuarios
            });
        })
});

// GET (Seleccionar por ID)
app.get('/usuario/:id', verificaToken, function(req, res) {
    let id = req.params.id;
    User.findById(id, (err, userDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!userDB) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'El ID no es correcto'
                }
            });
        }


        res.json({
            ok: true,
            categoria: userDB
        });

    });
});

// POST
app.post('/usuario', verificaToken, function(req, res) {
    let body = req.body;

    let user = new User({
        name: body.name,
        lastName: body.lastName,
        birdDate: body.birdDate,
        password: body.password,
        email: body.email,
        idUserType: body.idUserType
    });

    user.save((err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }

        res.json({
            ok: true,
            usuario: userDB
        })
    });
});

// PUT
app.put('/usuario/:id', verificaToken, function(req, res) {
    let id = req.params.id; // obtiene el parametro que se manda (id)
    let body = _.pick(req.body, ['name', 'lastName', 'birdDate', 'email', 'idUserType']);

    User.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });
    })
});

// DELETE
app.delete('/usuario/:id', verificaToken, function(req, res) {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, userDelete) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!userDelete) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'User not found'
                }
            });
        }

        res.json({
            ok: true,
            usuario: userDelete
        })
    })
});

module.exports = app;