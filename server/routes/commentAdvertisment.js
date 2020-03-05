const express = require('express');
const CommentAdvert = require('../models/commentAdvertisment');

const app = express();

app.get('/commAdv', function(req, res) {
    CommentAdvert.find({})
        .exec((err, comentariosAvisos) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                comentariosAvisos
            });
        })
});

// GET (Seleccionar por ID)
app.get('/commAdv/:id', function(req, res) {
    res.json('get commActivity');
});

// POST
app.post('/commAdv', function(req, res) {
    let body = req.body;

    let comAdv = new CommentAdvert({
        idAdvertisment: body.idAdvertisment,
        idStudent: body.idStudent,
        comment: body.comment,
        datComAdvertisment: body.datComAdvertisment
    });

    comAdv.save((err, comAdvDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }

        res.json({
            ok: true,
            commActivity: comAdvDB
        })
    });
});

// PUT
app.put('/commAdv/:id', function(req, res) {
    let id = req.params.id; // obtiene el parametro que se manda (id)
    CommentAdvert.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, comAdvDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            respuesta: comAdvDB
        });
    })
});

// DELETE
app.delete('/commAdv/:id', function(req, res) {
    let id = req.params.id;
    CommentAdvert.findByIdAndDelete(id, (err, cadvDelete) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!cadvDelete) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'User not found'
                }
            });
        }

        res.json({
            ok: true,
            usuario: cadvDelete
        })
    })
});