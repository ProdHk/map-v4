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