import ContenedorMongoDb from "../contenedor/contenedorMongo.js";
import { usuarioSchema } from "../usuarios.model.js";

export default class UsuarioDaoMongoDb extends ContenedorMongoDb{
    constructor(){
        super( 'users' , usuarioSchema )
    }
}
