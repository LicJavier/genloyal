import {Schema, model} from "mongoose";

export const usuarioSchema = Schema({
    name: { type: String,  require: true },
    surname :{ type: String,  require: true },
    email: { type: String,  require: true },
    birthday : { type: String,  require: true },
    phone :{ type: String,  require: true },
});

export const usuarioModel = model('usuario', usuarioSchema);
