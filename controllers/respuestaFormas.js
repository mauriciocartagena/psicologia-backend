
const { response } = require('express');
const { RespuestasFormas } = require('../database/config');


const mostrarRespuestasFormas = async ( req, res = response ) => { 

    const respuestaFormas = await RespuestasFormas.findAll();
 
     res.status( 200 ).json({
         ok:true,
         msg: 'lista de repuestas formas',
         respuestaFormas
     });
};

const crearRespuestasFormas = async ( req, res = response ) => { 

    const resp = await RespuestasFormas.findOne({
        where:{ 
            id_pregunta : req.body.id_pregunta,
            persona_id  : req.body.persona_id
        }
    });
    
    try {
            
        if ( resp ) {
            return res.status( 400 ).json({
                ok:false,
                msg: 'La pregunta ya existe'
           });
        }
        await RespuestasFormas.create( req.body );
            
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

const updateRespuestasFormas = async ( req, res = response ) => {

    await RespuestasFormas.update( req.body, { 

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

const deleteRespuestasFormas = async ( req, res = response ) => {

    await RespuestasFormas.destroy({
        where:{ id_respuesta : req.body.id_respuesta }
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
    mostrarRespuestasFormas,
    crearRespuestasFormas,
    updateRespuestasFormas,
    deleteRespuestasFormas
}