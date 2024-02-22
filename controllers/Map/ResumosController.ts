import Map from '@/models/Map'

import { mapTypes } from "@/types/mapTypes"

const realDate = Date.now()

const dataCadastro = new Date(realDate).toLocaleDateString("pt-BR")
const dataPontuacao = new Date(realDate).toLocaleDateString("pt-BR")
const estado = false




export async function GetResumos() {

    try {
        const resumos = await Map.find({ resumo: true })
        return resumos
    } catch (error) {
        return error


    }
}

export async function GetResumosConcluidas() {

    try {
        const map = await Map.find({ resumo: true, estado: true })
        return map
    } catch (error) {
        return error


    }
}

export async function GetResumosPendentes() {

    try {
        const map = await Map.find({ resumo: true, estado: false })
        return map
    } catch (error) {
        return error


    }
}


export async function PostResumo({ empresa, usuario, titulo, desc, beneficios, autor, frase }: mapTypes) {

    try {

        const resumo = { dataCadastro, resumo: true, estado, empresa, usuario, titulo, desc, beneficios, autor, frase }
        const novoResumo = await Map.create(resumo)
        return novoResumo
    } catch (error) {
        console.log("Aconteceu algo de errado!", error)

    }
}

export async function PutResumo({ id, pontos }: mapTypes) {

    try {
        const pontuarResumo = await Map.findByIdAndUpdate(id, { pontos, dataPontuacao, estado: true })
        return pontuarResumo

    } catch (error) {
        return error

    }
}


export async function DeleteResumo({ id }: mapTypes) {
    try {
        await Map.findByIdAndDelete(id)
        return
    } catch (error) {
        return error
    }
}