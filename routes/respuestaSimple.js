/*
    Rutas de Respuesta Simple / Questions Simple
    host + /api/respuesta-simple
*/ 

const { Router }        = require( 'express' );
const { check }         = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt.js');


const router = Router();

const { mostrarRespuestaSimple, crearRespuestaSimple, updateRespuestaSimple, deleteRespuestaSimple } = require('../controllers/respuestaSimple');

// Todos tienen que pasar por la validación del JWT
router.use( validarJWT );

router.get('/rsimple', mostrarRespuestaSimple);

router.post('/new',
    [
        check('id_pregunta',"La pregunta es requerido").not().isEmpty(),
        check('persona_id',"La persona es requerido").not().isEmpty(),
        validarCampos
    ], 
    crearRespuestaSimple);

router.put('/update',
    [
        check('id_respuesta',"La Respuesta es requerido").not().isEmpty(),
        validarCampos
    ], 
    updateRespuestaSimple);

router.delete('/delete',
    [
        check('id_respuesta',"La Respuesta es requerido").not().isEmpty(),
        validarCampos
    ], 
    deleteRespuestaSimple
);

module.exports = router;
