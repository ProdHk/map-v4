"use client"


import { useState } from "react"
import { Input } from "../ui/input"
import { PontuarIdeia } from "@/services/map/Ideias"
import { useRouter } from 'next/navigation'
import { PontuarUsuario } from "@/services/usuarios"

export default function PontuarLayout(data) {
    const router = useRouter()
    const [pontos, setPontos] = useState(0)
    const ideia = data.data
    const id = data.id
    const username = data.username
    const usuario = username.filter((i) => i._id === ideia.usuario)

    const nome = usuario[0]?.nome


    const PontuarIdeiaComponent = () => {
        return (
            <div className="w-full h-full min-w-10/12 flex flex-col items-center text-center justify-start p-5 gap-5">

                <div className="flex flex-col w-10/12 p-5  gap-5 items-center text-center justify-center
            bg-white rounded-md border border-zinc-200">

                    {/* Apresentação da ideia */}
                    <div className="flex flex-col w-10/12 p-5  items-center text-center justify-center
            bg-white rounded-md border border-zinc-200">

                        {/* HEADER */}
                        <div className="w-full p-3 flex flex-col">
                            <h2 className="text-2xl text-emerald-700 font-semibold text-center">
                                {ideia?.titulo}
                            </h2>
                            <h4 className="text-lg font-normal text-end mr-10">
                                {nome}                            </h4>
                            <div className="flex flex-col gap-5">

                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Empresa:</label>
                                    <h4>{ideia?.empresa}</h4>
                                </div>
                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Data de cadastro:</label>
                                    <h4>{ideia?.dataCadastro}</h4>
                                </div>

                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Envolvidos</label>
                                    <h4>{ideia?.envolvidos}</h4>
                                </div>
                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Resumo:</label>
                                    <h4>{ideia?.breveDesc}</h4>
                                </div>
                            </div>
                        </div>
                        {/* BODY */}
                        <div className="w-10/12 p-3 flex flex-col  text-lg  text-start font-sans">
                            <label className="font-semibold">Descrição:</label>
                            {ideia?.desc}
                        </div>


                    </div>


                </div>
                {/* Controle de pontuação */}
                {/* <PontuarComponent /> */}
            </div>
        )
    }
    const PontuarResumo = () => {
        console.log(ideia)
        return (
            <div className="w-full h-full min-w-10/12 flex flex-col items-center text-center justify-start p-5 gap-5">

                <div className="flex flex-col w-10/12 p-5  gap-5 items-center text-center justify-center
            bg-white rounded-md border border-zinc-200">

                    {/* Apresentação da ideia */}
                    <div className="flex flex-col w-10/12 p-5  items-center text-center justify-center
            bg-white rounded-md border border-zinc-200">

                        {/* HEADER */}
                        <div className="w-full p-3 flex flex-col">
                            <h2 className="text-2xl text-emerald-700 font-semibold text-center">
                                {ideia?.titulo}
                            </h2>
                            <h4 className="text-lg font-normal text-end mr-10">
                                {ideia?.autor}
                            </h4>
                            <div className="flex flex-col gap-5">

                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Empresa:</label>
                                    <h4>{ideia?.empresa}</h4>
                                </div>
                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Colaborador:</label>
                                    <h4>{nome}</h4>
                                </div>
                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Data de cadastro:</label>
                                    <h4>{ideia?.dataCadastro}</h4>
                                </div>


                            </div>
                        </div>
                        {/* BODY */}

                        <div className="w-10/12 p-3 flex flex-col  text-lg  text-start font-sans">
                            <label className="font-semibold">Beneficios:</label>
                            {ideia?.beneficios}
                        </div>
                        <div className="w-10/12 p-3 flex flex-col  text-lg  text-start font-sans">
                            <label className="font-semibold">Frase:</label>
                            {ideia?.frase}
                        </div>
                        <div className="w-10/12 p-3 flex flex-col  text-lg  text-start font-sans">
                            <label className="font-semibold">Resumo:</label>
                            {ideia?.desc}
                        </div>

                    </div>


                </div>
                {/* Controle de pontuação */}

            </div>
        )
    }
    const PontuarMelhoria = () => {
        return (
            <div className="w-full h-full min-w-10/12 flex flex-col items-center text-center justify-start p-5 gap-5">

                <div className="flex flex-col w-10/12 p-5  gap-5 items-center text-center justify-center
            bg-white rounded-md border border-zinc-200">

                    {/* Apresentação da ideia */}
                    <div className="flex flex-col w-10/12 p-5  items-center text-center justify-center
            bg-white rounded-md border border-zinc-200">

                        {/* HEADER */}
                        <div className="w-full p-3 flex flex-col">


                            <div className="flex flex-col gap-5">

                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Nome do colaborador:</label>
                                    <h4>{nome}</h4>
                                </div>
                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Empresa:</label>
                                    <h4>{ideia?.empresa}</h4>
                                </div>
                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Data de cadastro:</label>
                                    <h4>{ideia?.dataCadastro}</h4>
                                </div>


                            </div>
                        </div>
                        {/* BODY */}

                        <div className="w-10/12 p-3 flex flex-col  text-lg  text-start font-sans">
                            <label className="font-semibold">Atitude:</label>
                            {ideia?.atitude}
                        </div>
                        <div className="w-10/12 p-3 flex flex-col  text-lg  text-start font-sans">
                            <label className="font-semibold">Descrição:</label>
                            {ideia?.descMelhoria}
                        </div>
                        <div className="w-10/12 p-3 flex flex-col  text-lg  text-start font-sans">
                            <label className="font-semibold">Solução apresentada:</label>
                            {ideia?.sugestao}
                        </div>

                    </div>


                </div>
                {/* Controle de pontuação */}
            </div>
        )
    }

    const Component = () => {
        if (ideia.melhoria === true) {

            return <PontuarMelhoria />
        }
        if (ideia.ideia === true) {
            return <PontuarIdeiaComponent />

        }
        if (ideia.resumo === true) {
            return <PontuarResumo />
        }
    }
    return (
        <div className="w-full h-full min-w-10/12 flex flex-col items-center text-center justify-start p-5 gap-5">


            <Component />
            <div className="flex flex-col w-6/12 h-full p-5 gap-5
                bg-white rounded-md">
                <div className="flex flex-col justify-center items-center gap-5 p-5 ">
                    <h2 className="">Selecione uma nota</h2>
                    <Input
                        className=""
                        placeholder="Digite aqui"
                        type="number"
                        value={pontos}
                        onChange={(e) => setPontos(e.target.value)}
                    />
                    <button onClick={() => {
                        try {
                            PontuarIdeia({ id, pontos })
                            PontuarUsuario({ pontos, id: ideia?.usuario })
                            return router.push("/admin/pontuar")
                        } catch (error) {

                        }
                    }}>Enviar</button>

                </div>
            </div>
        </div>
    )

    /* 
    return (
        <div className="w-full h-full min-w-10/12 flex flex-col items-center text-center justify-start p-5 gap-5">


        </div>
    ) */
}