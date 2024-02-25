import Usuarios from "@/models/Usuarios"
import { userTypes } from "@/types/userTypes"

export async function GetUsers() {

    try {
        const users = await Usuarios.find();

        // Ordenar os usuários com base nos pontos
        users.sort((a, b) => b.pontos - a.pontos);

        return users;
    } catch (error) {
        console.log("Usuários não foram encontrados com sucesso!", error);
        return [];
    }
}

export async function PostUser({ nome, tag, pass, email, roles, team, imageProfile }: userTypes) {

    try {
        const newUser = await Usuarios.create({ nome, tag, pass, email, roles, team, imageProfile, pontos: 0 })
        console.log("Usuario cadastrado com sucesso!")
        return newUser
    } catch (error) {
        console.log("Usuario não foram cadastrado com sucesso!", error)

    }
}

export async function PutUser({ id, nome,
    tag,
    pass,
    email,
    empresa,
    dataNasc,
    dataAdmissao,
    team,
    pontos, }: userTypes) {

    try {
        const newUser = await Usuarios.findByIdAndUpdate(id, {
            nome,
            tag,
            pass,
            email,
            empresa,
            dataNasc,
            dataAdmissao,
            team,
            pontos,
        })
        console.log("Usuario cadastrado com sucesso!")
        return newUser
    } catch (error) {
        console.log("Usuario não foram cadastrado com sucesso!", error)

    }
}
export async function DeleteUser({ id }: userTypes) {

    try {
        await Usuarios.findByIdAndDelete(id)
        console.log("Usuario deletado com sucesso!")
        return
    } catch (error) {
        console.log("Usuario não foi deletado com sucesso!", error)

    }
}



