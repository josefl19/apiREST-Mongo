const express = require('express');
const Delivery = require('../models/delivery');

const app = express();

app.get('/delivery', function(req, res) {
    Delivery.find({})
        .exec((err, entregas) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                entregas
            });
        })
});

// GET (Seleccionar por ID)
app.get('/delivery/:id', function(req, res) {
    res.json('get delivery');
});

// POST
app.post('/delivery', function(req, res) {
    let body = req.body;

    let delivery = new Delivery({
        file: body.file,
        idStudent: body.idStudent,
        idActivity: body.idActivity,
        datDelivery: body.ddatDelivery
    });

    delivery.save((err, deliveryDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }

        res.json({
            ok: true,
            delivery: deliveryDB
        })
    });
});

// PUT
app.put('/delivery/:id', function(req, res) {
    let id = req.params.id; // obtiene el parametro que se manda (id)
    Delivery.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, deliveryDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            respuesta: deliveryDB
        });
    })
});

// DELETE
app.delete('/delivery/:id', function(req, res) {
    let id = req.params.id;
    Delivery.findByIdAndDelete(id, (err, dDelete) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!dDelete) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'User not found'
                }
            });
        }

        res.json({
            ok: true,
            usuario: dDelete
        })
    })
});