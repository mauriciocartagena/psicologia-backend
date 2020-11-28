/*
    Rutas de RespuestasFormas / respuestasFormas
    host + /api/respuesta-formas
*/ 

const { Router }        = require( 'express' );
const { check }         = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt.js');

const router = Router();

const { mostrarRespuestasFormas, crearRespuestasFormas, updateRespuestasFormas, deleteRespuestasFormas } = require('../controllers/respuestaFormas');

// Todos tienen que pasar por la validación del JWT
router.use( validarJWT );

router.get('/rformas', mostrarRespuestasFormas);

router.post('/new',
    [
        check('persona_id',"La persona es requerido").not().isEmpty(),
        check('id_pregunta',"La pregunta es requerido").not().isEmpty(),
        validarCampos
    ], 
    crearRespuestasFormas);

router.put('/update',
    [
        check('persona_id',"La persona es requerido").not().isEmpty(),
        check('id_respuesta',"La respuesta es requerido").not().isEmpty(),
        check('id_pregunta',"La pregunta es requerido").not().isEmpty(),
        validarCampos
    ], 
    updateRespuestasFormas);

router.delete('/delete',
    [
        check('id_respuesta',"La respuesta es requerido").not().isEmpty(),
        validarCampos
    ], 
    deleteRespuestasFormas
);


module.exports = router; 

