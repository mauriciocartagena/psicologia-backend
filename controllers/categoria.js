const { response } = require('express');
const { Categoria } = require('../database/config');


const mostrarCategoria = async ( req, res = response ) => { 

    const categoria = await Categoria.findAll();
 
     res.status( 201 ).json({
         ok:true,
         msg: 'lista de categorias',
         categorias:categoria
     });
};

const crearCategoria = async ( req, res = response ) => { 
    
    const name = await Categoria.findOne({
        where:{ nombre_categoria : req.body.nombre_categoria }
    });
    
    
    try {
            
        if ( name ) {
            return res.status( 400 ).json({
                ok:false,
                msg: 'La categoria ya existe'
           });
        }
        await Categoria.create( req.body );
            
        res.status( 200 ).json({
            ok:true,
            msg: 'register'
        });

    } catch (error) {
        console.log(error);
        res.status(201).json({
          ok:true,
          msg:'Por favor hable con el Administrador',
      });
    }

};

const updateCategoria = async ( req, res = response ) => {

    await Categoria.update( req.body, { 

        where:{ id_categoria : req.body.id_categoria }

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

// const loginUsuario = ( req, res = response ) => {

//     const { username, password } = ( req.body );

//     res.json({
//         ok:true,
//         msg:'login',
//         username,
//         password
//     });

// };


module.exports = {
    mostrarCategoria,
    crearCategoria,
    updateCategoria
}