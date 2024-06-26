"use client"

import Cookies from 'js-cookie';
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
import { useState } from "react"
import { CadastrarMelhoria } from "@/services/map/Melhorias"
import { useRouter } from 'next/navigation'

export default function FormCadastrarMelhoria() {




    const router = useRouter()

    const [empresa, setEmpresa] = useState('')
    const usuario = Cookies.get('userId');
    const [descMelhoria, setDescMelhoria] = useState('')
    const [atitude, setAtitude] = useState('')
    const [sugestao, setSugestao] = useState('')

    return (
        <div className="w-10/12 p-5 gap-5 bg-white rounded-md  m-5 
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

            </div>
            {/* ATITUDE E DESC */}

            <div className="flex flex-col w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md">
                <div className="flex flex-col text-center items-center w-full my-2 p-3">

                    <label className="w-10/12 text-lg font-medium p-1">Descreva o acontecido</label>
                    <Input placeholder="Digite aqui"
                        onChange={(e) => setDescMelhoria(e.target.value)}
                        className="h-16 text-center items-center justify-center" />

                </div>

                <div className="flex flex-col text-center items-center w-full my-2 p-3">

                    <label className="w-4/12 text-lg font-medium p-1">Qual foi sua atitude ?</label>
                    <Textarea
                        onChange={(e) => setAtitude(e.target.value)}
                        placeholder="Digite aqui"
                        className="h-16 text-center items-center justify-center" />

                </div>
                <div className="flex flex-col text-center items-center w-full my-2 p-3">

                    <label className="w-4/12 text-lg font-medium p-1">Qual sua sugestão de melhoria ?</label>
                    <Textarea
                        onChange={(e) => setSugestao(e.target.value)}
                        placeholder="Digite aqui"
                        className="h-16 text-center items-center justify-center" />

                </div>
                <Button onClick={() => {
                    try {
                        CadastrarMelhoria({
                            empresa, usuario, descMelhoria, atitude, sugestao,
                        })
                        return router.push("/map")
                    } catch (error) {

                    }
                }} className="p-5 my-5">Enviar melhoria </Button>
            </div>



        </div>
    )
}