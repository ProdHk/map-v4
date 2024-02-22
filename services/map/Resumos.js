
import axios from "axios"

const url = "/api/map/resumos"

export async function BuscarResumos() {

    try {

        const resumos = await axios.get(url).then((res) => res.data)
        console.log("Resumos encontrados com sucesso!")
        return resumos

    } catch (error) {

        console.log("Não foi possivel encontrar os resumos")
        return error

    }
}

export async function BuscarResumoId({ id }) {
    try {
        const resumos = await BuscarResumos()
        const resumo = resumos.filter(({ _id }) => _id === id)
        console.log("Resumo encontrada com sucesso!")
        return resumo
    } catch (error) {
        console.log("Não foi possivel encontrar o resumo")
        return error
    }
}


export async function BuscarResumosPontuados() {
    try {
        const resumos = await BuscarResumos()
        const resumo = resumos.filter(({ estado }) => estado === true)
        console.log("Resumos encontrados com sucesso!")
        return resumo
    } catch (error) {
        console.log("Não foi possivel encontrar os resumos")
        return error
    }
}

export async function BuscarResumosPendentes() {
    try {
        const resumos = await BuscarResumos()
        const resumo = resumos.filter(({ estado }) => estado === false)
        console.log("Resumo encontrado com sucesso!")
        return resumo
    } catch (error) {
        console.log("Não foi possivel encontrar os resumos")
        return error
    }
}


export async function CadastrarResumo({ empresa, usuario, titulo, desc, beneficios, autor, frase }) {

    try {

        const novoResumo = await axios.post(url,
            { empresa, usuario, titulo, desc, beneficios, autor, frase })
            .then((res) => res)
        console.log("Resumo adicionada com sucesso!")
        return novoResumo
    } catch (error) {
        console.log("Não foi possivel adicionar o resumo", error)
        return error
    }
}

export async function PontuarResumo({ id, pontos }) {
    try {
        const pontuarResumo = await axios.put(url,
            { id, pontos })
            .then((res) => res)
        console.log("Resumo pontuado com sucesso!")
        return pontuarResumo
    } catch (error) {
        console.log("Não foi possivel pontuar o resumo")
        return error
    }
}

export async function DeletarResumo({ id }) {
    try {
        await axios.delete(url, { id })
        console.log("Resumo deletado com sucesso!")
        return
    } catch (error) {
        console.log("Não foi possivel deletar o Resumo")
        return error
    }
}