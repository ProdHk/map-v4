"use client"

import Cookies from 'js-cookie';
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {
    SelectItem,
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent
} from "../ui/select"
import { Textarea } from "../ui/textarea"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { CadastrarResumo } from "@/services/map/Resumos"

export default function FormCadastrarResumo() {



    const router = useRouter()
    const [empresa, setEmpresa] = useState('')
    const usuario = Cookies.get('userId');
    const [titulo, setTitulo] = useState('')
    const [desc, setDesc] = useState('')
    const [beneficios, setBeneficios] = useState('')
    const [autor, setAutor] = useState('')
    const [frase, setFrase] = useState('')

    return (
        <div className="w-10/12 p-5 gap-5 m-5 bg-white rounded-md 
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


            {/* Titulo e descrição */}

            <div className="flex flex-col w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md">
                <div className="flex flex-col text-center items-center w-full  my-2 p-3">

                    <label className=" text-lg font-medium p-1">Titulo do livro</label>
                    <Input placeholder="Digite o titulo aqui"
                        onChange={(e) => setTitulo(e.target.value)}
                        className="h-16 text-center items-center justify-center" />

                </div>

                <div className="flex flex-col text-center items-center w-full  my-2 p-3">

                    <label className=" text-lg font-medium p-1">Resumo</label>
                    <Textarea
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Descreva aqui os melhores pontos da sua leitura"
                        className="h-16 text-center items-center justify-center" />

                </div>
            </div>


            {/* Beneficios */}

            <div className="flex flex-row w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md">
                <div className="flex flex-col text-center items-center w-full my-2 p-3">

                    <label className="text-lg font-medium p-1">Descreva os beneficios que o livro pode trazer para nosso intelecto</label>
                    <Textarea placeholder="Digite aqui"
                        onChange={(e) => setBeneficios(e.target.value)}
                        className="h-16 text-center items-center justify-center w-full" />

                </div>
            </div>

            {/* Autor */}
            <div className="flex flex-row w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md">
                <div className="flex flex-col text-center items-center w-full my-2 p-3">

                    <label className=" text-lg font-medium p-1">Quem é o autor </label>
                    <Input placeholder="Digite aqui"
                        onChange={(e) => setAutor(e.target.value)}
                        className="h-16 text-center items-center justify-center" />

                </div>
            </div>

            <div className="flex flex-row w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md">
                <div className="flex flex-col text-center items-center w-full my-2 p-3">

                    <label className="text-lg font-medium p-1">Qual parte/frase do livro chamou mais sua atenção ? </label>
                    <Textarea placeholder="Digite aqui"
                        onChange={(e) => setFrase(e.target.value)}
                        className="h-16 text-center items-center justify-center w-full" />

                </div>
            </div>
            <Button onClick={() => {
                try {
                    CadastrarResumo({ empresa, usuario, titulo, desc, beneficios, autor, frase })
                    return router.push('/map')
                } catch (error) {
                    console.log("Aconteceu algo de errado ao tentar cadastrar o resumo")
                }
            }} className="p-5">Cadastrar resumo</Button>


        </div>
    )
}