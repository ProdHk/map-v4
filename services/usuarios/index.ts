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


export async function LogarUsuario({ email, pass }: any) {
    try {
        const userEmail = email
        const usuarios = await BuscarUsuarios()

        const userExist = usuarios.filter(({ email }: userTypes) => email === userEmail)
        const access = userExist[0]?.pass === pass
        if (access === true) {
            return userExist[0]?.roles
        } else {
            return false
        }

        /* 
                if (userExist.pass === pass) {
                    return userExist
                } else {
                    let userDontExist
                    return userDontExist
                } */


    } catch (error) {
        console.log(error)
    }
}