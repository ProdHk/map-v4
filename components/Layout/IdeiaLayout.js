"use client"


import { useState } from "react"
import { Input } from "../ui/input"
import { PontuarIdeia } from "@/services/map/Ideias"
import { useRouter } from 'next/navigation'
import { PontuarUsuario } from "@/services/usuarios"

export default function IdeiaLayout(data) {
    const router = useRouter()

    const [pontos, setPontos] = useState(0)
    const ideia = data.data
    const id = data.id
    const username = data.username

    return (
        <div className="w-full h-full min-w-10/12 flex flex-col items-center text-center justify-start p-5 gap-5">

            <div className="flex flex-col w-10/12 p-5  gap-5 items-center text-center justify-center
            bg-white rounded-md border border-zinc-200">

                {/* Apresentação da ideia */}
                <div className="flex flex-col w-10/12 p-5  items-center text-center justify-center
            bg-white rounded-md border border-zinc-200">

                    {/* HEADER */}
                    <div className="w-full p-3 flex flex-col">
                        {ideia.titulo ?
                            <h2 className="text-2xl text-emerald-700 font-semibold text-center">
                                {ideia?.titulo}
                            </h2>
                            :
                            ""
                        }


                        {username ?
                            <h4 className="text-lg font-normal text-end mr-10">
                                {username ? `${username}` : "Carregando"}
                            </h4>
                            :
                            ""
                        }


                        <div className="flex flex-col gap-5">



                            {ideia.empresa ?
                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Empresa:</label>
                                    <h4>{ideia?.empresa}</h4>
                                </div>
                                :
                                ""
                            }


                            {ideia.dataCadastro ?
                                <div className="flex flex-row gap-5  items-start justify-start">
                                    <label className="font-semibold">Data de cadastro:</label>
                                    <h4>{ideia?.dataCadastro}</h4>
                                </div>
                                :
                                ""
                            }

                            {
                                ideia.envolvidos ?
                                    <div className="flex flex-row gap-5  items-start justify-start">
                                        <label className="font-semibold">Envolvidos</label>
                                        <h4>{ideia?.envolvidos}</h4>
                                    </div>
                                    :
                                    ""
                            }

                            {
                                ideia.breveDesc ?
                                    <div className="flex flex-row gap-5  items-start justify-start">
                                        <label className="font-semibold">Resumo:</label>
                                        <h4>{ideia?.breveDesc}</h4>
                                    </div>
                                    :
                                    ""
                            }
                        </div>
                    </div>
                    {/* BODY */}
                    {
                        ideia.desc ?
                            <div className="w-10/12 p-3 flex flex-col  text-lg  text-start font-sans">
                                <label className="font-semibold">Descrição:</label>
                                {ideia?.desc}
                            </div>
                            :
                            ""
                    }


                </div>


            </div>
            {/* Controle de pontuação */}
            <div className="flex flex-col w-6/12 h-full p-5 gap-5
                bg-white rounded-md">
                <div className="flex flex-col justify-center items-center gap-5 p-5 ">
                    <h2 className="">Selecione uma nota</h2>
                    <Input
                        className="" placeholder="Digite aqui"
                        type="number"
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
}