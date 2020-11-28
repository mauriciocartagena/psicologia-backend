/*
    Rutas de INSTITUTO / institutos
    host + /api/instituto
*/ 

const { Router }        = require( 'express' );
const { check }         = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt.js');

const router = Router();

const { mostrarInstituto, crearInstituto, updateInstituto, deleteInstituto } = require('../controllers/instituto');

// Todos tienen que pasar por la validación del JWT
router.use( validarJWT );

router.get('/inst', mostrarInstituto);

router.post('/new',
    [
        check('nombre',"El nombre es requerido").not().isEmpty(),
        check('direccion',"La Dirección es requerido").not().isEmpty(),
        check('celular',"El celular es requerido").not().isEmpty(),
        check('telefono',"El Telefono es requerido").not().isEmpty(),
        check('imei',"El imei es requerido").not().isEmpty(),
        check('nit',"El nit es requerido").not().isEmpty(),
        check('nombre_contacto',"El nombre de contacto es requerido").not().isEmpty(),
        validarCampos
    ], 
    crearInstituto);

router.put('/update',
    [
        check('nombre',"El nombre es requerido").not().isEmpty(),
        check('direccion',"La Dirección es requerido").not().isEmpty(),
        check('celular',"El celular es requerido").not().isEmpty(),
        check('telefono',"El Telefono es requerido").not().isEmpty(),
        check('imei',"El imei es requerido").not().isEmpty(),
        check('nit',"El nit es requerido").not().isEmpty(),
        check('nombre_contacto',"El nombre de contacto es requerido").not().isEmpty(),
        check('id_institucion',"El instituto es requerido").not().isEmpty(),
        validarCampos
    ], 
    updateInstituto);

router.delete('/delete',
    [
        check('id_institucion',"El instituto es requerido").not().isEmpty(),
        validarCampos
    ], 
    deleteInstituto
);


module.exports = router; 

