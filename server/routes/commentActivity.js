const express = require('express');
const CommentActivity = require('../models/commActivity');

const app = express();

app.get('/commActivity', function(req, res) {
    CommentActivity.find({})
        .exec((err, comentariosActividad) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                comentariosActividad
            });
        })
});

// GET (Seleccionar por ID)
app.get('/commActivity/:id', function(req, res) {
    res.json('get commActivity');
});

// POST
app.post('/commActivity', function(req, res) {
    let body = req.body;

    let comAct = new CommentActivity({
        idActivity: body.idActivity,
        idStudent: body.idStudent,
        comment: body.comment,
        datComActivity: body.datAdvertisement
    });

    comAct.save((err, comActDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }

        res.json({
            ok: true,
            commActivity: comActDB
        })
    });
});

// PUT
app.put('/commActivity/:id', function(req, res) {
    let id = req.params.id; // obtiene el parametro que se manda (id)
    CommentActivity.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, comAct) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            respuesta: comAct
        });
    })
});

// DELETE
app.delete('/commActivity/:id', function(req, res) {
    let id = req.params.id;
    CommentActivity.findByIdAndDelete(id, (err, caDelete) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!caDelete) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'User not found'
                }
            });
        }

        res.json({
            ok: true,
            usuario: caDelete
        })
    })
});