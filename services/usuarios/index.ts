import { mapTypes } from "@/types/mapTypes"
import axios from "axios"



export async function BuscarUsuarios() {
    const url = "/api/usuarios"
    try {
        const usuarios = await axios.get(url).then((res) => res.data)
        console.log("Usuarios carregados com sucesso!")
        return usuarios
    } catch (error) {
        console.log("Não foi possivel carregar os usuario", error)
        return error
    }
}


export async function PontuarUsuario({ id, pontos }: mapTypes) {
    const url = "/api/usuarios/pontuar"
    try {
        const pontuar = await axios.post(url, { id, pontos }).then((res) => res.data)
        console.log("Pontuado com sucesso!")
        return pontuar
    } catch (error) {
        console.log("Não foi possivel carregar os usuario", error)
        return error
    }
}