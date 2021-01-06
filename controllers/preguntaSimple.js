

const { response }        = require('express');
const { PreguntaSimple }  = require('../database/config');

const mostrarPreguntaSimple = async ( req, res = response  ) => {
    const limit = parseInt( req.query.limit ); // Asegúrate de parsear el límite a número
    const skip  = parseInt( req.query.skip );

    const preguntaSimple = await PreguntaSimple.findAll({
        limit: limit,
        offset: skip
    });

    res.status( 200 ).json({
        ok:true,
        msg:"Lista de preguntas simples",
        simples_preguntas:preguntaSimple
    });

}
const crearPreguntaSimple = async ( req, res = response  ) => {

    const name = await PreguntaSimple.findOne({
        where:{ pregunta : req.body.pregunta }
    });
    
    try {
            
        if ( name ) {
            return res.status( 400 ).json({
                ok:false,
                msg: 'La pregunta ya existe'
           });
        }
        await PreguntaSimple.create( req.body );
            
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

}
const updatePreguntaSimple = async ( req, res = response  ) => {

    await PreguntaSimple.update( req.body, { 

        where:{ id_pregunta : req.body.id_pregunta }

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
const deletePreguntaSimple = async ( req, res = response  ) => {

    await PreguntaSimple.destroy({
        where:{ id_pregunta : req.body.id_pregunta }
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
    mostrarPreguntaSimple,
    crearPreguntaSimple,
    updatePreguntaSimple,
    deletePreguntaSimple
}