"use client"
import { columns } from "./columns"
import { DataTable } from "./dataTable"
import { useEffect, useState } from "react"
import { BuscarUsuarios } from "@/services/usuarios"
import { BuscarMelhoriasPontuadas } from "@/services/map/Melhorias"

export default function DeletarUsuarioComponent() {
    const [usuario, setUsuario] = useState([])
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {

        async function buscarUsuarios() {
            const data = await BuscarUsuarios()
            setUsuarios(data)
        }
        buscarUsuarios()

    }, [])

    return (
        <div className=" m-5 w-10/12 h-max p-5 bg-white rounded-md ">
            <h2 className=" text-xl p-5 font-bold text-emerald-700"> Estes são os colaboradores cadastrados na plataforma </h2>
            <DataTable columns={columns} data={usuarios} />
        </div>
    )
}
