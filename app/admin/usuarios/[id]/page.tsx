"use client"

import { GetAll } from "@/services/map"
import { BuscarUsuarios } from "@/services/usuarios"
import { mapTypes } from "@/types/mapTypes"
import { userTypes } from "@/types/userTypes"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import UserTabs from '@/components/Tabs/UserTabs'
export default function Handler() {

    const [usuario, setUsuario] = useState<userTypes>()
    const [maps, setMaps] = useState<mapTypes>()

    const [ideias, setIdeias] = useState()
    const [resumos, setResumos] = useState()
    const [melhorias, setMelhorias] = useState()



    const { id } = useParams()
    useEffect(() => {


        async function getUser({ id }: any) {
            try {
                const data = await BuscarUsuarios()
                const user = data.filter(({ _id }: userTypes) => _id === id)
                setUsuario(user[0])

            } catch (error) {
                console.log("não foi possivel carregar o usuario", error)
            }
        }

        async function getMaps({ id }: any) {
            try {
                const data = await GetAll()
                const userData = data.filter(({ usuario }: mapTypes) => usuario === id)
                const ideias = userData.filter(({ ideia }: mapTypes) => ideia === true)
                const melhoria = userData.filter(({ melhoria }: mapTypes) => melhoria === true)
                const resumo = userData.filter(({ resumo }: mapTypes) => resumo === true)
                setIdeias(ideias)
                setResumos(resumo)
                setMelhorias(melhoria)
            } catch (error) {
                console.log("não foi possivel os maps deste usuario", error)
            }
        }



        getUser({ id })
        getMaps({ id })


    }, [])

    return (
        <div className='w-11/12 m-5 flex flex-col items-center justify-center text-center gap-5'>
            <div className="w-full h-full flex flex-row justify-between bg-white rounded-md p-5 gap-5">
                <div className="w-3/12 h-36 bg-blue-800">asd</div>
                <div className="flex flex-col w-full gap-5">
                    <div className="w-9/12 flex flex-row ml-16 gap-5 ">
                        <h2 className="font-semibold">Nome</h2>
                        <h2 className="font-semibold">{usuario?.nome}</h2>
                    </div>
                    <div className="w-9/12 flex flex-row ml-16 gap-5 ">
                        <h2 className="font-semibold">Setor</h2>
                        <h2 className="font-semibold">{usuario?.team}</h2>
                    </div>

                    <div className="w-9/12 flex flex-row ml-16 gap-5 ">
                        <h2 className="font-semibold">E-mail</h2>
                        <h2 className="font-semibold">{usuario?.email}</h2>
                    </div>
                </div>
            </div>


            {/* Tabs */}

            <div className="w-full h-full flex flex-row justify-between bg-white rounded-md p-5 gap-5">
                <UserTabs ideias={ideias}
                    resumos={resumos}
                    melhorias={melhorias} />

            </div>
        </div>
    )
}