import logger from "../config/logger.config.js"
import UsuarioDaoMongoDb from "../models/daos/usuariosDaoMongoDb.js";
import whatsappMsj from "../utils/twilio.js";

const userDao = new UsuarioDaoMongoDb
//----------------------------------------------------------------------------------------------
//---------------------------------CONTROLLERS--------------------------------------------------
//----------------------------------------------------------------------------------------------

export async function home( req , res ) {
    try {
        const listado = await userDao.listarTodo()
        logger.info(listado)
        res.send('listado ok')
    } catch (error) {
        logger.error(error);
    }
}

export async function register( req , res ) {
    try {
        const { name , surname , birthday , phone, email } = req.body;
        const usuario = await userDao.listarTodo();
        const newUsuario = usuario.find( e => e.email == email );
        if (newUsuario) {
            logger.warn('Usuario ya se registro')
            res.status(401)
        } else {
            const usuarioNuevo = await userDao.guardar({ 
                name : name, 
                surname : surname,
                email : email,
                birthday : birthday,
                phone : phone
                }) 
            logger.info(usuarioNuevo);
            await whatsappMsj(phone)
            res.status(201);
        }
    } catch (error) {
        logger.error(error);
    }
}
