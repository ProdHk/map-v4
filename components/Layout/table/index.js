"use client"
import { columns } from "./columns"
import { DataTable } from "./dataTable"
import { useEffect, useState } from "react"
import { BuscarIdeiasPontuadas } from "@/services/map/Ideias"
import { BuscarUsuarios } from "@/services/usuarios"

export default function IdeiasConcluidasTable() {
    const [ideias, setIdeias] = useState([])
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {

        async function buscarIdeias() {
            const data = await BuscarIdeiasPontuadas()
            setIdeias(data)
        }
        async function buscarUsuarios() {
            const data = await BuscarUsuarios()
            setUsuarios(data)
        }
        buscarIdeias() // Carrega os dados iniciais
        buscarUsuarios() // Carrega os dados iniciais

        const interval = setInterval(buscarIdeias, 5000) // Polling a cada 5 segundos

        return () => clearInterval(interval) // Limpa o intervalo quando o componente é desmontado
    }, [])

    return (
        <div className="w-10/12 h-max p-5 bg-white rounded-md ">
            <h2 className=" text-xl p-5 font-bold text-emerald-700"> Veja as ideias concluídas </h2>
            <DataTable columns={columns} data={ideias} usuarios={usuarios} />
        </div>
    )
}
