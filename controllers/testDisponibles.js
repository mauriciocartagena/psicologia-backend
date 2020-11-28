
const { response } = require('express');
const { TestDisponibles } = require('../database/config');

const mostrarTestDisponibles = async ( req, res = response ) => { 

    const testSimple = await TestDisponibles.findAll();
 
     res.status( 200 ).json({
         ok:true,
         msg: 'lista de test simples',
         testSimples:testSimple
     });
};

const crearTestDisponibles = async ( req, res = response ) => { 
    
    const name = await TestDisponibles.findOne({
        where:{ persona_id : req.body.persona_id }
    });
    
    
    try {
            
        if ( name ) {
            return res.status( 400 ).json({
                ok:false,
                msg: 'La persona ya existe'
           });
        }
        await TestDisponibles.create( req.body );
            
        res.status( 200 ).json({
            ok:true,
            msg: 'register'
        });

    } catch (error) {
        res.status(201).json({
          ok:true,
          msg:'Por favor hable con el Administrador',
      });
    }

};

const updateTestDisponibles = async ( req, res = response ) => {

    await TestDisponibles.update( req.body, { 

        where:{ id_test_disponible : req.body.id_test_disponible }

    }).then( () => {

        res.status( 200 ).json({

            ok:true,
            msg:'update'

        });

    }).catch( () => {

        res.status( 400 ).json({

            ok:false,
            msg:'error update'

        });

    });

}

const deleteTestDisponibles = async ( req, res = response ) => {

    await TestDisponibles.destroy({ 

        where:{ id_test_disponible : req.body.id_test_disponible }

    }).then( () => {
        res.status(200).json({
            ok:true,
            msg:'delete'
        });
    }).catch( (error)=> {
        console.log( error )
        res.status(400).json({
            ok:false,
            msg:'error delete'
        });
    });
}

module.exports = {
   mostrarTestDisponibles,
   crearTestDisponibles,
   updateTestDisponibles,
   deleteTestDisponibles
}