/*
    Rutas de PreguntaFormas / PreguntasFormas
    host + /api/pregunta-formas
*/ 

const { Router }        = require( 'express' );
const { check }         = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt.js');

const router = Router();

const { mostrarPreguntaForma, crearPreguntaForma, updatePreguntaForma, deletePreguntaForma, mostrarPreguntaOneForma } = require('../controllers/preguntaFormas');

// Todos tienen que pasar por la validación del JWT
router.use( validarJWT );

router.get('/pformas', mostrarPreguntaForma);

router.post('/pforma', 
    [
        check('id_pregunta',"La pregunta es requerida").not().isEmpty(),
        validarCampos
    ],
    mostrarPreguntaOneForma);

router.post('/new',
    [
        check('nombre',"El nombre es requerido").not().isEmpty(),
        check('id_test',"El test es requerido").not().isEmpty(),
        validarCampos
    ], 
    crearPreguntaForma);

router.put('/update',
    [
        check('nombre',"El nombre es requerido").not().isEmpty(),
        check('id_test',"El test es requerido").not().isEmpty(),
        check('id_pregunta',"La pregunta es requerido").not().isEmpty(),
        validarCampos
    ], 
    updatePreguntaForma);

router.delete('/delete',
    [
        check('id_pregunta',"La pregunta es requerido").not().isEmpty(),
        validarCampos
    ], 
    deletePreguntaForma
);

module.exports = router; 

