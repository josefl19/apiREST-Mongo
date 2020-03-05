const express = require('express');
const Activities = require('../models/activities');
let { verificaToken } = require('../middlewares/autenticacion');

const app = express();

app.get('/activities', function(req, res) {
    Activities.find({})
        .exec((err, actividades) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                actividades
            });
        })
});

// GET (Seleccionar por ID)
app.get('/activities/:id', function(req, res) {
    res.json('get activities');
});

// POST
app.post('/activities', function(req, res) {
    let body = req.body;

    let activity = new Activities({
        idCourse: body.idCourse,
        activity: body.activity,
        description: body.description,
        datActivity: body.datActivity
    });

    activity.save((err, activityDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }

        res.json({
            ok: true,
            activities: activityDB
        })
    });
});

// PUT
app.put('/activities/:id', function(req, res) {
    let id = req.params.id; // obtiene el parametro que se manda (id)

    Activities.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, activityDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            resultado: activityDB
        });
    })
});

// DELETE
app.delete('/activities/:id', function(req, res) {
    let id = req.params.id;
    Activities.findByIdAndDelete(id, (err, aDelete) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!aDelete) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'User not found'
                }
            });
        }

        res.json({
            ok: true,
            usuario: aDelete
        })
    })
});

module.exports = app;