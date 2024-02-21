"use client"


import IdeiaLayout from "@/components/Layout/IdeiaLayout"
import { BuscarIdeiaId } from "@/services/map/Ideias"
import { BuscarUsuarios } from "@/services/usuarios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

// eslint-disable-next-line @next/next/no-async-client-component
export default function Handler() {

    const [ideiaPendente, setIdeiaPendente] = useState({})
    const [uId, setUID] = useState('')
    const [usuarios, setUsuarios] = useState([])

    const { id } = useParams()


    useEffect(() => {
        async function getIdeia({ id }: any) {
            try {
                const ideia = await BuscarIdeiaId({ id })
                setIdeiaPendente(ideia[0])
                const uid = ideia[0].usuario
                setUID(uid)

                console.log("Ideia carregada com sucesso")
                console.log(ideia, uid)

            } catch (error) {
                console.log("algo de errado rolou", error)
            }
        }
        async function getUser() {

            const users = await BuscarUsuarios()
            console.log("Usuarios carregados com sucesso")
            const username = users.find((i: any) => i._id === uId)

            setUsuarios(username)

        }

        getIdeia({ id })
        getUser()
    }, [])

    return (
        <div className="w-full h-full min-h-max">

            <IdeiaLayout data={ideiaPendente} id={id} username={usuarios} />
        </div>
    )
}