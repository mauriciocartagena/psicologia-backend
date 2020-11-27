/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/ 

const { Router } = require( 'express' );
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken, verUsuario, modificarUsuario, DeleteUsuario, modificarUser } = require('../controllers/auth');


router.get('/usuarios', verUsuario);

router.post(
    '/new',
     [  //middlewares
        check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
        check( 'primer_apellido', 'El Primer Apellido es obligatorio' ).not().isEmpty(),
        check( 'celular', 'El celular es obligatorio' ).not().isEmpty(),
        check( 'imei', 'El imei es obligatorio' ).not().isEmpty(),
        check( 'genero', 'El genero es obligatorio' ).not().isEmpty(),
        check( 'edad', 'La edad es obligatorio' ).not().isEmpty(),
        check( 'direccion', 'La dirección es obligatorio' ).not().isEmpty(),
        check( 'padres_responsables', 'Los padres responsables es obligatorio' ).not().isEmpty(),
        check( 'dni', 'El dni es obligatorio' ).not().isEmpty(),
        check( 'id_institucion', 'La institución es obligatorio' ).not().isEmpty(),
        check( 'email', 'El email es obligatorio' ).not().isEmpty().isEmail(),
        check( 'username', 'El usuario es obligatorio' ).not().isEmpty(),
        check( 'password', 'El contraseña es obligatorio' ).isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario );

router.put(
        '/update',
        [// middlewares
            check( 'persona_id', 'La persona es requerida' ).not().isEmpty(),
            validarCampos
        ],
        modificarUsuario );
router.put(
            '/update-user',
            [// middlewares
                check( 'persona_id', 'La persona es requerida' ).not().isEmpty(),
                check( 'password', 'El password es requerida' ).isLength({ min: 6 }),
                validarCampos
            ],
            modificarUser );

router.delete(
    '/delete',
    [// middlewares
        check( 'persona_id', 'La persona es requerida' ).not().isEmpty(),
        validarCampos
    ],
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

