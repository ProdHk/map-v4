"use client"


import { useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { CadastrarIdeia } from "@/services/map/Ideias"
import { useRouter } from 'next/navigation'
import { BuscarUsuarios } from "@/services/usuarios"

export default function FormCadastrarIdeia() {

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
    const [breveDesc, setBreveDesc] = useState('')
    const [beneficios, setBeneficios] = useState('')
    const [envolvidos, setEnvolvidos] = useState('')
    const [desc, setDesc] = useState('')

    return (
        <div className="w-10/12  rounded-md  gap-5 h-full p-5 m-5
        flex flex-col items-center text-center justify-normal bg-zinc-50">
            {/* Form */}

            {/* empresa e usuario */}
            <div className="flex flex-row w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md mt-5 bg-white">
                <div className="flex flex-col text-center items-center justify-between w-6/12 my-2 p-3">

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

                <div className="flex flex-col text-center items-center justify-between w-6/12 my-2 p-3">
                    <label className="w-6/12 text-lg font-medium p-1">Informe seu usuario</label>
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


            {/* Titulo e descrição */}

            <div className="flex flex-row w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md mt-5 bg-white">
                <div className="flex flex-col text-center items-center w-5/12 my-2 p-3">

                    <label className="w-4/12 text-lg font-medium p-1">Titulo</label>
                    <Input placeholder="Digite o titulo aqui"
                        onChange={(e) => setTitulo(e.target.value)}
                        className="h-16 text-center items-center justify-center" />

                </div>

                <div className="flex flex-col text-center items-center w-6/12 my-2 p-3">

                    <label className="w-10/12 text-lg font-medium p-1">Breve descrição</label>
                    <Textarea
                        onChange={(e) => setBreveDesc(e.target.value)}
                        placeholder="Descreva aqui, de forma breve, sua ideia"
                        className="h-16 text-center items-center justify-center" />

                </div>
            </div>


            {/* Beneficios */}

            <div className="flex flex-row w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md mt-5 bg-white">
                <div className="flex flex-col text-center items-center w-full my-2 p-3">

                    <label className="text-lg font-medium p-1">Descreva os beneficios da sua ideia para a emprea</label>
                    <Textarea placeholder="Digite aqui"
                        onChange={(e) => setBeneficios(e.target.value)}

                        className="h-16 text-center items-center justify-center w-full" />

                </div>
            </div>

            {/* Envolvidos */}
            <div className="flex flex-row w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md mt-5 bg-white">
                <div className="flex flex-col text-center items-center w-full my-2 p-3">

                    <label className=" text-lg font-medium p-1">Quem serão os envolvidos </label>
                    <Input placeholder="Digite aqui"
                        onChange={(e) => setEnvolvidos(e.target.value)}

                        className="h-16 text-center items-center justify-center" />

                </div>
            </div>

            <div className="flex flex-row w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md mt-5 bg-white">
                <div className="flex flex-col text-center items-center w-full my-2 p-3">

                    <label className="text-lg font-medium p-1">Descreva detalhadamente sua ideia</label>
                    <Textarea placeholder="Digite aqui"
                        onChange={(e) => setDesc(e.target.value)}

                        className="h-16 text-center items-center justify-center w-full" />

                </div>
            </div>
            <Button onClick={() => {
                try {
                    CadastrarIdeia({
                        empresa, usuario, titulo, breveDesc, beneficios, envolvidos, desc
                    })
                    return router.push("/map")

                } catch (error) {
                    console.log("algo de errado aconteceu")
                }
            }} className="p-5">Cadastrar ideia</Button>

            {/* Palavras chaves */}
            {/* Categorias */}


        </div>
    )
}