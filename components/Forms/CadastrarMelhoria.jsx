"use client"


import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "../ui/select"
import { Textarea } from "../ui/textarea"
import { useEffect, useState } from "react"
import { CadastrarMelhoria } from "@/services/map/Melhorias"
import { useRouter } from 'next/navigation'
import { BuscarUsuarios } from "@/services/usuarios"

export default function FormCadastrarMelhoria() {

    const [usuarios, setUsuarios] = useState([])


    useEffect(() => {
        async function getUsers() {
            try {
                const data = await BuscarUsuarios()
                setUsuarios(data)
            } catch (error) {
                console.log("Erro", error)
            }
        }
        getUsers()

    }, [])

    const router = useRouter()
    const [empresa, setEmpresa] = useState('')
    const [usuario, setUsuario] = useState('')
    const [titulo, setTitulo] = useState('')
    const [desc, setDesc] = useState('')

    return (
        <div className="w-10/12 p-5 gap-5 bg-white rounded-md 
        flex flex-col items-center text-center justify-normal">
            {/* Form */}

            {/* empresa e usuario */}
            <div className="flex flex-row w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md">
                <div className="flex flex-col text-center items-center w-6/12 my-2 p-3">

                    <label className="w-10/12 text-lg font-medium p-1">Selecione uma empresa</label>
                    <Select onValueChange={(e) => setEmpresa(e)} >
                        <SelectTrigger className="flex flex-row items-center justify-center text-center">
                            <SelectValue placeholder="Clique aqui" />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem value="Cia Mineira">Cia. Mineira</SelectItem>
                            <SelectItem value="J.Lemara">J.Lemara</SelectItem>
                            <SelectItem value="Ambas">Ambas</SelectItem>
                        </SelectContent>
                    </Select>

                </div>
                <div className="flex flex-col text-center items-center w-6/12 my-2 p-3">

                    <label className="w-10/12 text-lg font-medium p-1">Informe seu usuario</label>
                    <Select onValueChange={(e) => setUsuario(e)} >
                        <SelectTrigger className="flex flex-row items-center justify-center text-center">
                            <SelectValue placeholder="Clique aqui" />
                        </SelectTrigger>
                        <SelectContent>
                            {usuarios.map(({ _id, nome }) => (
                                <SelectItem key={_id} value={_id}>
                                    {nome}
                                </SelectItem>
                            ))}

                        </SelectContent>
                    </Select>

                </div>
            </div>
            {/* TITULO E DESC */}

            <div className="flex flex-col w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md">
                <div className="flex flex-col text-center items-center w-full my-2 p-3">

                    <label className="w-10/12 text-lg font-medium p-1">Titulo</label>
                    <Input placeholder="Digite o titulo aqui"
                        onChange={(e) => setTitulo(e.target.value)}
                        className="h-16 text-center items-center justify-center" />

                </div>

                <div className="flex flex-col text-center items-center w-full my-2 p-3">

                    <label className="w-4/12 text-lg font-medium p-1">Descrição</label>
                    <Textarea
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Descreva aqui"
                        className="h-16 text-center items-center justify-center" />

                </div>
                <Button onClick={() => {
                    try {
                        CadastrarMelhoria({
                            empresa, usuario, titulo, desc
                        })
                        return router.push("/map")
                    } catch (error) {

                    }
                }} className="p-5 my-5">Enviar melhoria </Button>
            </div>



        </div>
    )
}