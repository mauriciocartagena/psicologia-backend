/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/ 

const { Router } = require( 'express' );
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken, verUsuario, modificarUsuario, DeleteUsuario } = require('../controllers/auth');


router.get('/usuarios', verUsuario);
router.post(
    '/new',
     [  //middlewares
        check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
        check( 'primer_apellido', 'El Primer Apellido es obligatorio' ).not().isEmpty(),
        check( 'dni', 'El Dni debe es obligatorio' ).not().isEmpty(),
        check( 'fecha_nacimiento', 'La fecha de nacimiento es obligatorio' ).not().isEmpty().isDate(),
        check( 'email', 'El email es obligatorio' ).not().isEmpty().isEmail(),
        validarCampos
    ],
    crearUsuario );
router.put(
        '/update/:personId',
        [// middlewares
            // check( 'name', 'El nombre es obligatorio' ).not().isEmpty(),
            // check( 'email', 'El email es obligatorio' ).isEmail(),
            // check( 'password', 'El password debe de ser de 6 caracteres' ).isLength({ min: 6 }),
            validarCampos
        ],
        modificarUsuario );
router.delete(
    '/delete/:personId',
    DeleteUsuario
)

router.post('/',
    [
        check( 'email', 'El email es obligatorio' ).isEmail(),
        check( 'password', 'El password debe de ser de 6 caracteres' ).isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario);

router.get('/renew', revalidarToken);


module.exports = router; 

