const { response } = require('express');
const { RespuestaSimple } = require('../database/config');

const mostrarRespuestaSimple = async ( req, res = response ) => { 

    const respuestaSimple = await RespuestaSimple.findAll();
 
     res.status( 200 ).json({
        ok:true,
        msg: 'lista de respuesta simples',
        respuestaSimple
     });
};

const crearRespuestaSimple = async ( req, res = response ) => { 
        
    try {
            
        await RespuestaSimple.create( req.body );
            
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

const updateRespuestaSimple = async ( req, res = response ) => {

    await RespuestaSimple.update( req.body, { 

        where:{ id_respuesta : req.body.id_respuesta }

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

const deleteRespuestaSimple = async ( req, res = response ) => {

    await RespuestaSimple.destroy({
        where:{ id_respuesta: req.body.id_respuesta  },
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
    mostrarRespuestaSimple,
    crearRespuestaSimple,
    updateRespuestaSimple,
    deleteRespuestaSimple
}