/*
    Rutas de preguntaSimple / Pregunta Simple
    host + /api/p-simple
*/ 


const { Router }        = require( 'express' );
const { check }         = require( 'express-validator' );
const { validarCampos } = require( '../middlewares/validar-campos' );
const { validarJWT } = require('../middlewares/validar-jwt.js');

const router = Router();

const { mostrarPreguntaSimple, crearPreguntaSimple, updatePreguntaSimple, deletePreguntaSimple } = require( '../controllers/preguntaSimple' );

// Todos tienen que pasar por la validación del JWT
router.use( validarJWT );


router.get( '/psimples',mostrarPreguntaSimple);

router.post( '/new',
    [
        check("pregunta","La pregunta es requerida").not().isEmpty(),
        check("id_categoria","La categoria es requerida").not().isEmpty(),
        check("id_test","El test es requerida").not().isEmpty(),
        validarCampos
    ],
    crearPreguntaSimple
);


router.put( '/update',
    [
        check("id_pregunta","La pregunta es requerida").not().isEmpty(),
        validarCampos
    ],
    updatePreguntaSimple
);

router.delete( '/delete',
    [
        check("id_pregunta","La pregunta es requerida").not().isEmpty(),
        validarCampos
    ],
    deletePreguntaSimple
);

module.exports = router;