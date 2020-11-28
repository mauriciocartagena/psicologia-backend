/*
    Rutas de Test Disponibles / Test disponibles
    host + /api/test-disponibles
*/ 

const { Router }        = require( 'express' );
const { check }         = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

const { mostrarTestDisponibles, crearTestDisponibles, updateTestDisponibles, deleteTestDisponibles } = require('../controllers/testDisponibles');


router.get('/tdisponibles', mostrarTestDisponibles);

router.post('/new',
    [
        check('persona_id',"La persona es requerida").not().isEmpty(),
        validarCampos
    ], 
    crearTestDisponibles);

router.put('/update',
    [
        check('id_test_disponible',"El test es requerida").not().isEmpty(),
        validarCampos
    ], 
    updateTestDisponibles);

router.delete('/delete',
    [
        check('id_test_disponible',"El test es requerida").not().isEmpty(),
        validarCampos
    ], 
    deleteTestDisponibles
);

module.exports = router; 

