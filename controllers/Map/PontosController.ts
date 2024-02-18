import Usuarios from "@/models/Usuarios"
import { userTypes } from "@/types/userTypes"

export async function AddPontos({ id, pontos }: userTypes) {

    try {
        const usuario = await Usuarios.findById(id).then((res) => res)
        const pontosAtuais = usuario.pontos
        let pontosFuturos = pontosAtuais + pontos
        await Usuarios.findByIdAndUpdate(id, { pontos: pontosFuturos }).then((res) => res)

        return
    } catch (error) {
        return error

    }
}