
const { response } = require('express');
const jwt = require('jsonwebtoken');


const validarJWT = ( req, res = response, next ) => {

    /// x-token headers
    const token = req.header('x-token');

    if( !token ){

        return res.status(401).json({

            ok:false,
            msg:'No ahy token en la petición'

        });
    }
    try {

        const { uid, name } = jwt.verify(

            token,
            process.env.SECRET_JWT_SEDD

        );
        
        req.uid = uid;
        req.name = name;

    } catch (error) {
        
        return res.status(401).json({
            ok:false,
            msg:'Token no Valido'
        });

    }

    next();

}

module.exports = {
    validarJWT
}