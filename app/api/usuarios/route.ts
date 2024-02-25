import { GetUsers, PostUser, PutUser, DeleteUser } from "@/controllers/UserController"
import { userTypes } from '@/types/userTypes'



export async function GET() {

    try {

        const data = await GetUsers()
        console.log("Usuarios carregados com sucesso! ")

        return Response.json(data)

    } catch (error) {
        console.log("Houve algo de errado ao tentar encontar os usuarios", error)
        return Response.json({ msg: "Ocorreu um erro ao buscar os usuarios" })
    }

}



export async function POST(req: Request) {

    try {
        const { nome, tag, pass, email,
            empresa, dataNasc, dataAdmissao,
            team, pontos } = await req.json()

        const newUser = await PostUser(<userTypes>{
            nome, tag, pass, email,
            empresa, dataNasc, dataAdmissao,
            team, pontos
        })

        return Response.json({ msg: "Usuario cadastrado com sucesso!", newUser })
    } catch (error) {
        console.log("Algo de errado aconteceu ao tentar cadastrar o usuario", error)
        return Response.json({ msg: "Algo de errado aconteceu ao tentar cadastrar o usuario" })
    }


}

export async function PUT(req: Request) {

    try {
        const { id, nome, tag, pass, email, roles, team, imageProfile } = await req.json()

        const editedUser = await PutUser(<userTypes>{ id, nome, tag, pass, email, roles, team, imageProfile })

        return Response.json({ msg: "Usuario editado com sucesso", editedUser })
    } catch (error) {
        console.log("Algo de errado aconteceu ao tentar editar o usuario", error)
        return Response.json({ msg: "Algo de errado aconteceu ao tentar editar o usuario" })
    }


}

export async function DELETE(req: Request) {

    try {
        const { id } = await req.json()

        await DeleteUser(<userTypes>{ id })

        return Response.json({ msg: "Usuario deletado com sucesso" })
    } catch (error) {
        console.log("Algo de errado aconteceu ao tentar deletar o usuario", error)
        return Response.json({ msg: "Algo de errado aconteceu ao tentar deletar o usuario" })
    }


}
