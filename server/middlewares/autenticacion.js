const jwt = require('jsonwebtoken');

// Verificar Token
let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, 'semilla-de-token', (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });
};

module.exports = {
    verificaToken
}