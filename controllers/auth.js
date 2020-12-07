const { response } = require('express');
const bcrypt = require('bcryptjs');
const { Usuario } = require('../database/config');
const { Persona } = require('../database/config');

const { generarJWT } = require('../helpers/jwt');

const verUsuario = async ( req, res = response ) => { 

    const persona =  await Persona.findAll({
        include: [
            { model: Usuario, as: 'usuarios',
              attributes:['username','last_session','createdAt','updatedAt','id_institucion','token']
            }
        ]
    });

    res.status( 201 ).json({
        ok:true,
        msg: 'lista de usuarios',
        personas:  persona
    });
};

const verOneUsuario = async ( req, res = response ) => { 

    const { persona_id  } = req.body;
    
    const persona =  await Persona.findOne({
        where:{ persona_id: persona_id},
                include: [
                { model: Usuario, as: 'usuarios',
                    attributes:['username','last_session','createdAt','updatedAt','id_institucion','token']
                }
            ]
    });
    try {
        res.status( 201 ).json({
            ok:true,
            msg: 'lista de usuario',
            persona:  persona
        });
        
    } catch (error) {
        console.log( error )
        res.status( 400 ).json({
            ok:false,
            msg:'Por favor hable con el Administrador',
            personas:  persona
        });
    }


};

const crearUsuario = async ( req, res = response ) => { 

    
    const { username, email, dni, password } = req.body;
    
    const personaDni      =  await Persona.findOne({ 
        where:{ dni : dni }
    });
    const personaUsername =  await Usuario.findOne({ 
        where:{ username : username }
    });
    const PersonaEmail    =  await Persona.findOne({ 
        where:{ email : email }
    });

    
    try {
        
        
        if ( personaDni || personaUsername || PersonaEmail) {
            
            return res.status( 400 ).json({
                ok:false,
                msg:'El usuario ya existe'
            });
            
        }
        
        //Encryptar contraseña
        const { persona_id } =  await Persona.create( req.body );
        
        const salt = bcrypt.genSaltSync();

        //Generar JWT

        const token = await generarJWT( persona_id, username );
        
        passwordEncryt = bcrypt.hashSync( password, salt );
        

        await Usuario.create( { 
            persona_id, 
            username,
            password:passwordEncryt,
            token 
        });
    
        res.status( 201 ).json({
            ok:true,
            msg: 'register',
        });
        
    } catch (error) {
        console.log(error);
        res.status(201).json({
            ok:true,
            msg:'Por favor hable con el Administrador',
        });
    }
};

const modificarUsuario = async ( req, res = response ) => { 

    await Persona.update( req.body ,{
        where:{ persona_id: req.body.persona_id }
    }).then( ()=> { 
        res.status( 200 ).json({
            ok:true,
            msg: 'update',
        });
    }).catch(()=> {
        res.status( 400 ).json({
            ok:true,
            msg: 'error update',
        });
    });
   
};
const modificarUser = async ( req, res = response ) => {
    
    const { username } = req.body;
    
    const personaUsername =  await Usuario.findOne({ 
        where:{ username : username }
    });
    
    try {
        
        if ( personaUsername ) {
            
            return res.status( 400 ).json({
                ok:false,
                msg:'El usuario ya existe'
            });
            
        }
        await Usuario.update( req.body ,{
            where:{ persona_id: req.body.persona_id }
        }).then( ()=> { 
            res.status( 200 ).json({
                ok:true,
                msg: 'update',
            });
        }).catch(()=> {
            res.status( 400 ).json({
                ok:true,
                msg: 'error update',
            });
        });

    }catch(error){

        console.log(error);
        res.status(201).json({
            ok:true,
            msg:'Por favor hable con el Administrador',
        });

    }

    
   
};

const DeleteUsuario = async ( req, res = response ) => { 

    await Persona.destroy({
        where: { persona_id: req.body.persona_id }
    }).then( ()=> { 
        res.status( 200 ).json({
            ok:true,
            msg: 'delete',
        });
    }).catch(()=> {
        res.status( 400 ).json({
            ok:true,
            msg: 'error delete',
        });
    });
};





const loginUsuario = async ( req, res = response ) => {

    const { username, password } = req.body;
    
    const personaUsername =  await Usuario.findOne({ 
        where:{ username : username }
    });

    try {

        if ( !personaUsername ) {
            return res.status( 400 ).json({
                ok:false,
                msg:"El usuario no existe con ese username"

            });
        }

        const validPassword = bcrypt.compareSync( password, personaUsername.password );

        if ( !validPassword ) {
            
            return res.status( 400 ).json({
                ok:false,
                msg:'Password incorrecto'
            });

        }

        //Generar JWT

        const token = await generarJWT( personaUsername.persona_id, username );

        
        res.status(201).json({
            ok: true,
            uid: personaUsername.persona_id,
            username: personaUsername.username,
            token 
        });




    } catch (error) {
       
        console.log(error);
        res.status(500).json({
          ok:true,
          msg:'Por favor hable con el Administrador',
      });
    

    }

};

const revalidarToken = async( req, res = response ) => {

    const { uid, name }  = req;

    //generar un nuevo JWT y retornar en esta petición

    //Generar JWT

    const token = await generarJWT( uid, name );

    res.json({
        ok:true,
        uid,
        username:name,
        token
    });
};


module.exports = {
    verUsuario,
    verOneUsuario,
    crearUsuario,
    loginUsuario,
    revalidarToken,
    crearUsuario,
    modificarUsuario,
    modificarUser,
    DeleteUsuario,
    revalidarToken
}