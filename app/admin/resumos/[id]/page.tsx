"use client"
import { GetOneMapById } from "@/services/map"
import { BuscarUsuarios } from "@/services/usuarios"
import { mapTypes } from "@/types/mapTypes"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"


export default function Handler() {

    const [ideia, setIdeia] = useState({})
    const [usuario, setUsuario] = useState('')

    const { id } = useParams()

    useEffect(() => {
        async function getUsername(id: mapTypes) {
            try {
                const usuarios = await BuscarUsuarios()
                const usuario = usuarios.filter(({ _id }: any) => _id === id)
                setUsuario(usuario[0].nome)
            } catch (error) {
                console.log("erro por aquis")
            }

        }
        async function getIdeia(id: mapTypes) {
            try {
                const ideia = await GetOneMapById({ id })
                setIdeia(ideia)
                getUsername(ideia.usuario)
            } catch (error) {

            }
        }
        getIdeia(id)
    }, [])


    return (
        <div className="w-full h-full min-w-10/12 flex flex-col items-center text-center justify-start p-5 gap-5">

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
                            <h4 className="text-lg  text-end mr-10 font-semibold p-5">
                                {usuario}
                            </h4>
                            <div className="flex flex-col gap-5">

                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Empresa:</label>
                                    <h4>{ideia?.empresa}</h4>
                                </div>
                                <div className="flex flex-row justify-between w-full">
                                    <div className="flex flex-row gap-5  items-start justify-start">
                                        <label className="font-semibold">Data de cadastro:</label>
                                        <h4>{ideia?.dataCadastro}</h4>
                                    </div>
                                    <div className="flex flex-row gap-5  items-start justify-start">
                                        <label className="font-semibold">Data de pontuação:</label>
                                        <h4>{ideia?.dataPontuacao}</h4>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Pontos:</label>
                                    <h4>{ideia?.pontos}</h4>
                                </div>

                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Frase</label>
                                    <h4>{ideia?.frase}</h4>
                                </div>
                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Autor:</label>
                                    <h4>{ideia?.autor}</h4>
                                </div>
                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Beneficios:</label>
                                    <h4>{ideia?.beneficios}</h4>
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


            </div>

        </div>
    )







}

/* 
   
                     */