
import axios from "axios"

const url = "/api/map/melhorias"

export async function BuscarMelhorias() {

    try {

        const melhorias = await axios.get(url).then((res) => res.data)
        console.log("Ideia encontrada com sucesso!")
        return melhorias

    } catch (error) {

        console.log("Não foi possivel encontrar melhorias ")
        return error

    }
}

export async function BuscarMelhoriaId({ id }) {
    try {
        const melhorias = await BuscarMelhorias()
        const melhoria = melhorias.filter(({ _id }) => _id === id)
        console.log("Melhoria encontrada com sucesso!")
        return melhoria
    } catch (error) {
        console.log("Não foi possivel encontrar a melhoria")
        return error
    }
}


export async function BuscarMelhoriasPontuadas() {
    try {
        const melhorias = await BuscarMelhorias()
        const melhoria = melhorias.filter(({ estado }) => estado === true)
        console.log("Melhoria encontrada com sucesso!")
        return melhoria
    } catch (error) {
        console.log("Não foi possivel encontrar melhorias pontuadas")
        return error
    }
}

export async function BuscarMelhoriasPendentes() {
    try {
        const melhorias = await BuscarIdeias()
        const melhoria = melhorias.filter(({ estado }) => estado === false)
        console.log("Melhorias encontrada com sucesso!")
        return melhoria
    } catch (error) {
        console.log("Não foi possivel encontrar melhorias pendentes")
        return error
    }
}


export async function CadastrarMelhoria({ empresa, usuario, titulo, desc }) {

    try {

        const novaMelhoria = await axios.post(url,
            { empresa, usuario, titulo, desc })
            .then((res) => res)
        console.log("Ideia adicionada com sucesso!")
        return novaMelhoria
    } catch (error) {
        console.log("Não foi possivel adicionar a melhoria", error)
        return error
    }
}

export async function PontuarMelhoria({ id, pontos }) {
    try {
        const pontuarMelhoria = await axios.put(url,
            { id, pontos })
            .then((res) => res)
        console.log("Melhoria pontuada com sucesso!")
        return pontuarMelhoria
    } catch (error) {
        console.log("Não foi possivel pontuar a melhoria")
        return error
    }
}

export async function DeletarMelhoria({ id }) {
    try {
        await axios.delete(url, { id })
        console.log("Melhoria deletada com sucesso!")
        return
    } catch (error) {
        console.log("Não foi possivel deletar a melhoria")
        return error
    }
}