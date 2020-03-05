const express = require('express');
const Advertisement = require('../models/advertisement');

const app = express();

app.get('/advertisement', function(req, res) {
    Advertisement.find({})
        .exec((err, avisos) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                avisos
            });
        })
});

// GET (Seleccionar por ID)
app.get('/advertisement/:id', function(req, res) {
    res.json('get advertisement');
});

// POST
app.post('/advertisement', function(req, res) {
    let body = req.body;

    let advert = new Advertisement({
        idCourse: body.idCourse,
        notice: body.notice,
        datAdvertisement: body.datAdvertisement
    });

    advert.save((err, advertDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }

        res.json({
            ok: true,
            advertisement: advertDB
        })
    });
});

// PUT
app.put('/advertisement/:id', function(req, res) {
    let id = req.params.id; // obtiene el parametro que se manda (id)
    Advertisement.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, advertDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            respuesta: advertDB
        });
    })
});

// DELETE
app.delete('/advertisement/:id', function(req, res) {
    let id = req.params.id;
    Advertisement.findByIdAndDelete(id, (err, adDelete) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!adDelete) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'User not found'
                }
            });
        }

        res.json({
            ok: true,
            usuario: adDelete
        })
    })
});