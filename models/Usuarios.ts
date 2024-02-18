import DbConnection from "@/utils/DbConnection";
import mongoose from "mongoose"

DbConnection()

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const UserSchema = new Schema({

    id: String,
    nome: String,
    tag: String,
    pass: String,
    email: String,
    empresa: String,
    dataNasc: Date,
    dataAdmissao: Date,

    roles: String,
    team: String,

    pontos: Number,
    imageProfile: String,
})

/* const Usuarios = mongoose.model('Usuario', userSchema)
 */

export default mongoose.models.Usuario || mongoose.model('Usuario', UserSchema)