
const { response } = require('express');
const { TestFormas, PreguntasFormas } = require('../database/config');


const mostrarTestFormas = async ( req, res = response ) => { 

    const testFormas = await TestFormas.findAll();
 
     res.status( 200 ).json({
         ok:true,
         msg: 'lista de test formas',
         testFormas
     });
};


const mostrarTestFormasPregunta = async ( req, res = response ) => {

    const { id_test  } = req.body;

    const limit = parseInt( req.body.limit ); 
    const skip  = parseInt( req.body.skip );


    const preguntaFormas = await PreguntasFormas.findAll({
        where:{ id_test: id_test },
        limit: limit,
        offset: skip
    });

     try {
        res.status( 200 ).json({
            ok:true,
            msg: 'lista de preguntas formas',
            preguntaFormas
        });   
         
     } catch (error) {
         console.log( error )
         res.status( 400 ).json({
             ok:false,
             msg:'Por favor hable con el Administrador'
         });
     }
}
const crearTestFormas = async ( req, res = response ) => { 
    
    const name = await TestFormas.findOne({
        where:{ nombre : req.body.nombre }
    });
    
    
    try {
            
        if ( name ) {
            return res.status( 400 ).json({
                ok:false,
                msg: 'El test ya existe'
           });
        }
        await TestFormas.create( req.body );
            
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

const updateTestFormas = async ( req, res = response ) => {

    await TestFormas.update( req.body, { 

        where:{ id_test : req.body.id_test }

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

const deleteTestFormas = async ( req, res = response ) => {

    await TestFormas.destroy({
        where:{ id_test: req.body.id_test  },
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
    mostrarTestFormas,
    mostrarTestFormasPregunta,
    crearTestFormas,
    updateTestFormas,
    deleteTestFormas
}