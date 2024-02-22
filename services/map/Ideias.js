
import axios from "axios"

const url = "/api/map/ideias"

export async function BuscarIdeias() {

    try {

        const ideias = await axios.get(url).then((res) => res.data)
        console.log("Ideia encontrada com sucesso!")
        return ideias

    } catch (error) {

        console.log("Não foi possivel encontrar a ideia")
        return error

    }
}

export async function BuscarIdeiaId({ id }) {
    try {

        const ideias = await BuscarIdeias()
        console.log(ideias)
        const ideia = await ideias.filter(({ _id }) => _id === id)
        return ideia

    } catch (error) {

        console.log("Não foi possivel encontrar a ideia")
        return error

    }
}



export async function BuscarIdeiasPontuadas() {
    try {
        const url = "/api/map/concluidos"
        const ideias = await axios.get(url).then((res) => res.data)
/*         const ideia = ideias.filter(({ estado }) => estado === true)
 */        console.log("Ideia encontrada com sucesso!")
        return ideias
    } catch (error) {
        console.log("Não foi possivel encontrar a ideia")
        return error
    }
}

export async function BuscarIdeiasPendentes() {
    try {
        const ideias = await BuscarIdeias()
        const ideia = ideias.filter(({ estado }) => estado === false)
        console.log("Ideia encontrada com sucesso!")
        return ideia
    } catch (error) {
        console.log("Não foi possivel encontrar a ideia")
        return error
    }
}


export async function CadastrarIdeia({ empresa, usuario, titulo, breveDesc, beneficios, envolvidos, desc }) {

    try {

        const novaIdeia = await axios.post(url,
            { empresa, usuario, titulo, breveDesc, beneficios, envolvidos, desc })
            .then((res) => res)
        console.log("Ideia adicionada com sucesso!")
        return novaIdeia
    } catch (error) {
        console.log("Não foi possivel adicionar a ideia", error)
        return error
    }
}

export async function PontuarIdeia({ id, pontos }) {
    try {
        const pontuarIdeia = await axios.put(url,
            { id, pontos })
            .then((res) => res)

        console.log("Ideia pontuada com sucesso!")
        return pontuarIdeia
    } catch (error) {
        console.log("Não foi possivel pontuar a ideia")
        return error
    }
}

export async function DeletarIdeia({ id }) {
    try {
        await axios.delete(url, { id })
        console.log("Ideia deletada com sucesso!")
        return
    } catch (error) {
        console.log("Não foi possivel deletar a ideia")
        return error
    }
}