"use client"

import { Calendar } from "@/components/ui/calendar"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useRouter } from 'next/navigation'
import { CadastrarUsuario, EditarUsuario } from "@/services/usuarios"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { CalendarIcon } from "@radix-ui/react-icons"

export default function FormEditarUsuario({ usuario }) {


    const router = useRouter()

    const [nome, setNome] = useState('')
    const [tag, setTag] = useState('')
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [dataNasc, setDataNasc] = useState()
    const [dataAdmissao, setDataAdmissao] = useState()
    const [team, setTeam] = useState('')
    const [pontos, setPontos] = useState(0)

    return (
        <div className="w-10/12  rounded-md  gap-5 h-full p-5 m-5
        flex flex-col items-center text-center justify-normal bg-zinc-50">
            <h2 className="p-1 font-semibold text-xl">Preencha os dados do usuario</h2>

            <div className="flex flex-row w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md mt-5 bg-white">
                <label className=" text-lg font-medium p-1 w-3/12">Nome</label>
                <Input type="text" onChange={(e) => setNome(e.target.value)}
                    className="w-8/12" />
            </div>

            {/* empresa e usuario */}
            <div className="flex flex-row w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md mt-5 bg-white">
                <label className=" text-lg font-medium p-1 w-3/12">E-mail</label>
                <Input type="text" onChange={(e) => setEmail(e.target.value)}
                    className="w-8/12" />
            </div>
            <div className="flex flex-row w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md mt-5 bg-white">
                <label className=" text-lg font-medium p-1 w-3/12">Senha</label>
                <Input type="password" onChange={(e) => setPass(e.target.value)}
                    className="w-8/12" />
            </div>

            <div className="flex flex-row w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md mt-5 bg-white">
                <label className=" text-lg font-medium p-1 w-3/12">Empresa </label>
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
            <div className="flex flex-row w-full items-center text-center justify-center
            border-2 border-zinc-200 rounded-md mt-5 bg-white">
                <label className=" text-lg font-medium p-1 w-3/12">Setor </label>
                <Select onValueChange={(e) => setTeam(e)} >

                    <SelectTrigger className="flex flex-row items-center justify-center text-center">
                        <SelectValue placeholder="Clique aqui" />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectItem value="crc">CRC</SelectItem>
                        <SelectItem value="comercial">J.Comercial</SelectItem>
                        <SelectItem value="vendas">Vendas</SelectItem>
                        <SelectItem value="operacoes">Operações</SelectItem>
                    </SelectContent>
                </Select>
            </div>


            <Button onClick={() => {
                try {
                    EditarUsuario({
                        nome,
                        tag,
                        pass,
                        email,
                        empresa,
                        dataNasc,
                        dataAdmissao,
                        team,
                        pontos,
                    })
                    return router.push("/admin")

                } catch (error) {
                    console.log("algo de errado aconteceu")
                }
            }} className="p-5">Cadastrar usuario</Button>

            {/* Palavras chaves */}
            {/* Categorias */}


        </div>
    )
}