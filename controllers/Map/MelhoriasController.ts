import Map from '@/models/Map'

import { mapTypes } from "@/types/mapTypes"

const realDate = Date.now()

const dataCadastro = new Date(realDate).toLocaleDateString("pt-BR")
const dataPontuacao = new Date(realDate).toLocaleDateString("pt-BR")
const estado = false




export async function GetMelhorias() {

    try {
        const melhorias = await Map.find({ melhoria: true })
        return melhorias
    } catch (error) {
        return error


    }
}

export async function GetMelhoriasConcluidas() {

    try {
        const map = await Map.find({ melhoria: true, estado: true })
        return map
    } catch (error) {
        return error


    }
}
export async function GetMelhoriasPendentes() {

    try {
        const map = await Map.find({ melhoria: true, estado: false })
        return map
    } catch (error) {
        return error


    }
}


export async function PostMelhoria({ empresa, usuario, descMelhoria, atitude, sugestao, }: mapTypes) {

    try {

        const melhoria = { dataCadastro, melhoria: true, estado, empresa, usuario, descMelhoria, atitude, sugestao, }
        const newMap = await Map.create(melhoria)
        return newMap
    } catch (error) {
        console.log("Usuarios não foram cadastrado com sucesso!", error)

    }
}

export async function PutMelhoria({ id, pontos }: mapTypes) {

    try {
        const pontuarMelhoria = await Map.findByIdAndUpdate(id, { pontos, dataPontuacao, estado: true })
        return pontuarMelhoria

    } catch (error) {
        return error

    }
}


export async function DeleteMelhoria({ id }: mapTypes) {
    try {
        await Map.findByIdAndDelete(id)
        return
    } catch (error) {
        return error
    }
}