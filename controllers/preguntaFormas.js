
const { response } = require('express');
const { PreguntasFormas, TestFormas } = require('../database/config');

const mostrarPreguntaForma = async ( req, res = response ) => { 

    const preguntaFormas = await PreguntasFormas.findAll({
        include: [
            { model: TestFormas, as: 'test_formas',
              attributes:['nombre']
            }
        ]
    });
 
     res.status( 200 ).json({
         ok:true,
         msg: 'lista de preguntas formas',
         preguntaFormas
     });
};
const mostrarPreguntaOneForma = async ( req, res = response ) => { 

    const { id_pregunta  } = req.body;

    const preguntaFormas = await PreguntasFormas.findOne({
        where:{ id_pregunta: id_pregunta},
            include: [
                { model: TestFormas, as: 'test_formas',
                attributes:['nombre']
                }
            ]
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
 



};

const crearPreguntaForma = async ( req, res = response ) => { 
    
    const name = await PreguntasFormas.findOne({
        where:{ nombre : req.body.nombre }
    });
    
    
    try {
            
        if ( name ) {
            return res.status( 400 ).json({
                ok:false,
                msg: 'La pregunta ya existe'
           });
        }
        await PreguntasFormas.create( req.body );
            
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

const updatePreguntaForma = async ( req, res = response ) => {

    await PreguntasFormas.update( req.body, { 

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

const deletePreguntaForma = async ( req, res = response ) => {

    await PreguntasFormas.destroy({
        where:{ id_pregunta: req.body.id_pregunta  },
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
    mostrarPreguntaForma,
    crearPreguntaForma,
    updatePreguntaForma,
    deletePreguntaForma,
    mostrarPreguntaOneForma
}