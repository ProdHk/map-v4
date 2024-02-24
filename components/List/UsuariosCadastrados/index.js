"use client"
import { columns } from "./columns"
import { DataTable } from "./dataTable"
import { useEffect, useState } from "react"
import { BuscarUsuarios } from "@/services/usuarios"
import { BuscarResumosPontuados } from "@/services/map/Resumos"

export default function UsuariosTable() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {


        async function buscarUsuarios() {
            const data = await BuscarUsuarios()
            setUsuarios(data)
        }
        buscarUsuarios()


    }, [])

    return (
        <div className="w-10/12 h-max p-5 bg-white rounded-md ">
            <h2 className=" text-xl p-5 font-bold text-emerald-700"> Veja os usuarios cadastrados </h2>
            <DataTable columns={columns} data={usuarios} />
        </div>
    )
}
