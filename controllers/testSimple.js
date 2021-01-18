const { response } = require( 'express' );
const { TestSimple } = require('../database/config');

const mostrarTestSimple = async( req, res = response ) => {

    const testSimple = await TestSimple.findAll();

    res.status( 200 ) .json({
        ok:true,
        msg:'Lista de Test Simple',
        testSimple: testSimple
    });

}
const crearTestSimple = async ( req, res = response ) => {

    const name = await TestSimple.findOne({ 
        where:{ nombre_test : req.body.nombre_test }
    });
    
    try {

        if( name ) {
            return res.status( 400 ).json({
                ok:false,
                msg:'El test ya existe'
            });
        }

        await TestSimple.create( req.body );
    
    
        res.status( 200 ).json({
            ok:true,
            msg:'register'
        });

        
    } catch (error) {
        console.log( error );
        res.status( 400 ).json({
            ok:false,
            msg:'Error ponganse en contacto con el administrador'
        });
        
    }

}
const updateTestSimple = async ( req, res = response ) => {

    await TestSimple.update( req.body, { 
        where:{ id_test : req.body.id_test }
    }).then(() => {

        res.status( 200 ).json({
            ok:true,
            msg:'update'
        });
        
    }).catch(() => {
        
        res.status( 400 ).json({
            ok:false,
            msg:'Error update'
        });

    });


}
const DeleteTestSimple = async( req, res = response ) => {

    await TestSimple.destroy({ 

        where:{ id_test : req.body.id_test }

    }).then(() => {

        res.status( 200 ).json({
            ok:true,
            msg:'delete'
        });
        
    }).catch(() => {

        res.status( 400 ).json({
            ok:false,
            msg:'Error delete'
        });

    });
}

module.exports = {
    mostrarTestSimple,
    crearTestSimple,
    updateTestSimple,
    DeleteTestSimple
}