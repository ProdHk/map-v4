import DbConnection from "@/utils/DbConnection";
import mongoose from "mongoose"

DbConnection()

const { Schema } = mongoose;

mongoose.Promise = global.Promise;


const mapSchema = new Schema({

    estado: Boolean,
    usuario: String,
    pontos: Number,

    ideia: Boolean,
    melhoria: Boolean,
    resumo: Boolean,

    empresa: String,
    titulo: String,
    desc: String,
    breveDesc: String,

    impactos: String,
    beneficios: String,
    envolvidos: String,
    setor: String,

    autor: String, // resumo de livro
    frase: String, // resumo de livro
    conteudo: String, // resumo de livro

    //melhorias
    atitude: String,
    sugestao: String,

    tipoMelhoria: String, // sugestão, erro interno, problema atendimento, erro sistemico, telefonia, veiculos da empresa, manutenção de equipamentos, infraestrutura
    solucaoMelhoria: String,
    descMelhoria: String,


    dataCadastro: String,
    dataPontuacao: String,
    dataAcontecimento: String



})

export default mongoose.models.Map || mongoose.model('Map', mapSchema)


