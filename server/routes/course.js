const express = require('express');
const Courses = require('../models/course');

const app = express();

app.get('/course', function(req, res) {
    Courses.find({})
        .exec((err, cursos) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                cursos
            });
        })
});

// GET (Seleccionar por ID)
app.get('/course/:id', function(req, res) {
    let id = req.params.id;
    Courses.findById(id, (err, courseDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!courseDB) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'El ID no es correcto'
                }
            });
        }

        res.json({
            ok: true,
            categoria: courseDB
        });
    });
});

// POST
app.post('/course', function(req, res) {
    let body = req.body;

    let course = new Courses({
        idTeacher: body.idTeacher,
        name: body.name,
        description: body.description
    });

    course.save((err, courseDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }

        res.json({
            ok: true,
            course: courseDB
        })
    });
});

// PUT
app.put('/course/:id', function(req, res) {
    let id = req.params.id; // obtiene el parametro que se manda (id)
    Courses.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, courseDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            respuesta: courseDB
        });
    })
});

// DELETE
app.delete('/course/:id', function(req, res) {
    let id = req.params.id;
    Courses.findByIdAndDelete(id, (err, cDelete) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!cDelete) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'User not found'
                }
            });
        }

        res.json({
            ok: true,
            usuario: cDelete
        })
    })
});