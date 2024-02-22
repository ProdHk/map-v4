import Usuarios from "@/models/Usuarios"
import { userTypes } from "@/types/userTypes"

export async function AddPontos({ id, pontos }: any) {

    try {
        const usuario = await Usuarios.findById(id).then((res) => res)
        const pontosAtuais = usuario.pontos

        const pontosInt = parseInt(pontos)
        let pontosFuturos = pontosAtuais + pontosInt
        await Usuarios.findByIdAndUpdate(id, { pontos: pontosFuturos }).then((res) => res)

        return
    } catch (error) {
        return error

    }
}