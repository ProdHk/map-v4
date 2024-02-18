
"use client"
import { GetOneMapById } from "@/services/map"
import { BuscarUsuarios } from "@/services/usuarios"
import { mapTypes } from "@/types/mapTypes"
import { userTypes } from "@/types/userTypes"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"


export default function Handler() {

    const [ideia, setIdeia] = useState<mapTypes>()
    const [usuario, setUsuario] = useState<userTypes | ''>('');


    const { id } = useParams()
    useEffect(() => {

        async function getIdeia({ id }: any) {

            try {
                const ideia = await GetOneMapById({ id })
                setIdeia(ideia)
                const uId = ideia?.usuario
                const usuarios = await BuscarUsuarios()
                const username = usuarios.filter(({ _id }: userTypes) => _id === uId)
                setUsuario(username[0].nome)

            } catch (error) {
                console.log("erro ao buscar map", error)
            }

        }


        getIdeia({ id })
    })



    return (
        <div className="w-full h-full min-w-10/12 flex flex-col items-center text-center justify-start p-5 gap-5">

            <div className="w-full h-full min-w-10/12 flex flex-col items-center text-center justify-start p-5 gap-5">

                <div className="flex flex-col w-10/12 p-5  gap-5 items-center text-center justify-center
            bg-white rounded-md border border-zinc-200">

                    {/* Apresentação da ideia */}

                    <div className="flex flex-col w-10/12 p-5  items-center text-center justify-center
            bg-white rounded-md border border-zinc-200">

                        <div className="w-full p-3 flex flex-col">
                            <h2 className="text-2xl text-emerald-700 font-semibold text-center">
                                {ideia?.titulo}
                            </h2>
                            <h4 className="text-lg  text-end mr-10 font-semibold p-5">
                                {usuario ? `${usuario}` : "Não informado"}
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
                                    <h4>{ideia ? `${ideia.pontos}` : ""}</h4>
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
                        <div className="w-10/12 p-3 flex flex-col  text-lg  text-start font-sans">
                            <label className="font-semibold">Descrição:</label>
                            {ideia?.desc}
                        </div>


                    </div >

                </div>


            </div>

        </div>
    )







}

/* 
   
                     */