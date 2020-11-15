const { Router } =  require('express');
const { check }  = require('express-validator');
const { mostrarUsuario, crearUsuario, loginUsuario } = require('../controllers/users');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get( '/', mostrarUsuario );

router.post(
    '/new',
    [//Mis middlewares
        check('username','El username es Obligatorio').not().isEmpty(),
        check('password','El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ] ,
    crearUsuario );

router.post('/',
    [
        check('username','El username es Obligatorio').not().isEmpty(),
        validarCampos
    ],
    loginUsuario);

module.exports = router;