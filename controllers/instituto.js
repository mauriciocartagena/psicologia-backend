const { response } = require('express');
const { Institucion } = require('../database/config');

const mostrarInstituto = async ( req, res = response ) => { 

    const institucion = await Institucion.findAll();
 
     res.status( 200 ).json({
         ok:true,
         msg: 'lista de Institutos',
         instituciones:institucion
     });
};

const crearInstituto = async ( req, res = response ) => { 
    
    const name = await Institucion.findOne({
        where:{ nombre : req.body.nombre }
    });
    
    
    try {
            
        if ( name ) {
            return res.status( 400 ).json({
                ok:false,
                msg: 'La institución ya existe'
           });
        }
        await Institucion.create( req.body );
            
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

const updateInstituto = async ( req, res = response ) => {

    await Institucion.update( req.body, { 

        where:{ id_institucion : req.body.id_institucion }

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

const deleteInstituto = async ( req, res = response ) => {

    await Institucion.destroy({

        where:{ id_institucion : req.body.id_institucion }

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
    mostrarInstituto,
    crearInstituto,
    updateInstituto,
    deleteInstituto
}