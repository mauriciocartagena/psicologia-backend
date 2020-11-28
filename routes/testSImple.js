/*
    Rutas de Test Simple / test-simple
    host + /api/test-simple
*/ 

const { Router }        = require( 'express' );
const { check }         = require( 'express-validator' );
const { validarCampos } = require( '../middlewares/validar-campos' );
const router = Router();

const { mostrarTestSimple, crearTestSimple, updateTestSimple, DeleteTestSimple } = require('../controllers/testSimple');

router.get( '/testsimples',
    mostrarTestSimple
);

router.post( '/new',
    [
        check('nombre_test',"Nombre es requerido").not().isEmpty(),
        validarCampos
    ],
    crearTestSimple
);

router.put( '/update',
    [
        check("id_test","El test es requerido").not().notEmpty(),
        validarCampos
    ],
    updateTestSimple
);

router.delete( '/delete',
    [
        check("id_test","El test es requerido").not().notEmpty(),
        validarCampos
    ],
    DeleteTestSimple
);

module.exports = router;