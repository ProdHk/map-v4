import { userTypes } from "@/types/userTypes"
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


export async function PontuarUsuario({ id, pontos }: userTypes) {
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


export async function CadastrarUsuario({ nome,
    tag,
    pass,
    email,
    empresa,
    dataNasc,
    dataAdmissao,
    team,
    pontos, }: userTypes) {

    const url = "/api/usuarios"
    try {
        const pontuar = await axios.post(url, {
            nome, tag, pass, email,
            empresa, dataNasc, dataAdmissao,
            team, pontos
        }).then((res) => res.data)
        console.log("Cadastrado com sucesso!")
        return pontuar
    } catch (error) {
        console.log("Não foi possivel carregar os usuario", error)
        return error
    }
}

export async function EditarUsuario({
    id,
    nome,
    tag,
    pass,
    email,
    empresa,
    dataNasc,
    dataAdmissao,
    team,
    pontos, }: userTypes) {

    const url = "/api/usuarios"
    try {
        const pontuar = await axios.put(url, {
            id, nome, tag, pass, email, team, pontos, empresa,
        }).then((res) => res.data)
        console.log("Editado com sucesso!")
        return pontuar
    } catch (error) {
        console.log("Não foi possivel carregar os usuario", error)
        return error
    }
}


export async function LogarUsuario({ email, pass }: any) {
    try {
        const userEmail = email
        const userPass = pass

        const usuarios = await BuscarUsuarios()

        const userExist = usuarios.filter(({ email }: userTypes) => email === userEmail)

        if (userExist.length < 1) {
            console.log(false)
            return false
        }

        const access = userExist[0]?.pass === userPass

        if (access === true) {
            const user = userExist[0]
            return user
        } else {
            return false
        }



    } catch (error) {
        console.log(error)
    }
}