/*
    Rutas de Usuarios / users
    host + /api/users
*/ 

const { Router } =  require('express');
const { check }  = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt.js');

const router = Router();


const { crearUsuario, verUsuario, modificarUsuario, DeleteUsuario, modificarUser, verOneUsuario } = require('../controllers/auth');

// Todos tienen que pasar por la validación del JWT
router.use( validarJWT );

router.get('/usuarios', verUsuario);

router.get(
    '/usuario',
    [
        check('persona_id','La persona es requerida').not().isEmpty(),
        validarCampos
    ], 
    verOneUsuario
);

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

module.exports = router;