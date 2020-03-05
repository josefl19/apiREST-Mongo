const express = require('express');
let UserT = require('../models/usersType');
let { verificaToken } = require('../middlewares/autenticacion');
let app = express();

app.get('/usuarioT', verificaToken, function(req, res) {
    UserT.find({})
        .exec((err, usuariost) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                usuariost
            });
        })
});

// GET (Seleccionar por ID)
app.get('/usuarioT/:id', verificaToken, function(req, res) {
    res.json('get Usuario');
});

// POST
app.post('/usuarioT', verificaToken, function(req, res) {
    let body = req.body;

    let userT = new UserT({
        description: body.description
    });

    userT.save((err, userTDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }

        res.json({
            ok: true,
            usuario: userTDB
        })
    });
});

// PUT
app.put('/usuarioT/:id', verificaToken, function(req, res) {
    let id = req.params.id; // obtiene el parametro que se manda (id)
    UserT.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, userTDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: userTDB
        });
    })
});

// DELETE
app.delete('/usuarioT', verificaToken, function(req, res) {
    let id = req.params.id;
    UserT.findByIdAndDelete(id, (err, usertDelete) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!usertDelete) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'User not found'
                }
            });
        }

        res.json({
            ok: true,
            usuario: usertDelete
        })
    })
});

module.exports = app;