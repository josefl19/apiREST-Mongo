const express = require('express');
const Schedule = require('../models/schedule');

const app = express();

app.get('/schedule', function(req, res) {
    Schedule.find({})
        .exec((err, materias) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                materias
            });
        })
});

// GET (Seleccionar por ID)
app.get('/schedule/:id', function(req, res) {
    res.json('get schedule');
});

// POST
app.post('/schedule', function(req, res) {
    let body = req.body;

    let schedule = new Schedule({
        idCourse: body.idCourse,
        idStudent: body.idStudent,
    });

    schedule.save((err, scheduleDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }

        res.json({
            ok: true,
            schedule: scheduleDB
        })
    });
});

// PUT
app.put('/schedule/:id', function(req, res) {
    let id = req.params.id; // obtiene el parametro que se manda (id)
    res.json({
        id
    });
});

// DELETE
app.delete('/schedule/:id', function(req, res) {
    res.json('delete schedule');
});