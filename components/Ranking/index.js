"use client"
import { BuscarUsuarios } from "@/services/usuarios"
import { columns } from "./columns"
import { DataTable } from "./dataTable"
import { useEffect, useState } from "react"


export default function Ranking() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        async function buscar() {
            const data = await BuscarUsuarios()
            setUsuarios(data)
        }
        buscar()
    }, [])

    return (
        <div className="w-11/12 h-max p-5  bg-white rounded-md mt-5 gap-5 ">
            <h2 className=" text-xl p-5 font-bold text-emerald-700"> Acompanhe o ranking em tempo real! </h2>
            <DataTable columns={columns} data={usuarios} />
        </div>
    )
}
