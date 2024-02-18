import Map from '@/models/Map'

import { mapTypes } from "@/types/mapTypes"

const realDate = Date.now()

const dataCadastro = new Date(realDate).toLocaleDateString("pt-BR")
const dataPontuacao = new Date(realDate).toLocaleDateString("pt-BR")
const estado = false




export async function GetIdeia() {

    try {
        const map = await Map.find({ ideia: true, estado: false })
        return map
    } catch (error) {
        return error


    }
}



export async function GetIdeiasConcluidas() {

    try {
        const map = await Map.find({ ideia: true, estado: true })
        return map
    } catch (error) {
        return error


    }
}

export async function GetIdeiasPendentes() {

    try {
        const map = await Map.find({ ideia: true, estado: false })
        return map
    } catch (error) {
        return error


    }
}


export async function GetIdeiaById({ id }: mapTypes) {

    try {
        const map = await Map.findById(id)
        return map
    } catch (error) {
        return error


    }
}

export async function PostIdeia({ titulo, empresa, setor, desc, breveDesc, envolvidos, impactos, usuario }: mapTypes) {

    try {

        const map = { dataCadastro, ideia: true, estado, titulo, empresa, setor, desc, breveDesc, envolvidos, impactos, usuario }
        const newMap = await Map.create(map)
        return newMap
    } catch (error) {
        console.log("Usuarios não foram cadastrado com sucesso!", error)

    }
}

export async function PutIdeia({ id, pontos }: mapTypes) {

    try {
        const pontuarIdeia = await Map.findByIdAndUpdate(id, { pontos, dataPontuacao, estado: true })
        return pontuarIdeia

    } catch (error) {
        return error

    }
}


export async function DeleteIdeia({ id }: mapTypes) {
    try {
        await Map.findByIdAndDelete(id)
        return
    } catch (error) {
        return error
    }
}