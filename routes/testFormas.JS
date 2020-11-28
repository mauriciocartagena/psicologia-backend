/*
    Rutas de TEST FORMAS / tesFormas
    host + /api/test-formas
*/ 

const { Router }        = require( 'express' );
const { check }         = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

const { mostrarTestFormas, crearTestFormas, updateTestFormas, deleteTestFormas } = require('../controllers/testFormas');


router.get('/tformas', mostrarTestFormas);

router.post('/new',
    [
        check('nombre',"El nombre es requerido").not().isEmpty(),
        validarCampos
    ], 
    crearTestFormas);

router.put('/update',
    [
        check('nombre',"El nombre es requerido").not().isEmpty(),
        check('id_test',"El test es requerido").not().isEmpty(),
        validarCampos
    ], 
    updateTestFormas);

router.delete('/delete',
    [
        check('id_test',"El test es requerido").not().isEmpty(),        
        validarCampos
    ], 
    deleteTestFormas
);

module.exports = router; 

