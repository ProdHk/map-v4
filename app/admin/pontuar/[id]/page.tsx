"use client"


import { GetAll } from "@/services/map"
import { BuscarUsuarios } from "@/services/usuarios"
import { mapTypes } from "@/types/mapTypes"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import PontuarLayout from '@/components/Layout/PontuarLayout'
import { userTypes } from "@/types/userTypes"

// eslint-disable-next-line @next/next/no-async-client-component
export default function Handler() {

    const [ideiaPendente, setIdeiaPendente] = useState<any>({})
    const [usuarios, setUsuarios] = useState([])

    const { id } = useParams()


    useEffect(() => {


        async function getIdeia({ id }: any) {
            try {
                const all = await GetAll()
                const filter = all.filter(({ _id }: mapTypes) => _id === id)
                const data = filter[0]
                setIdeiaPendente(data)
            } catch (error) {
                console.log("algo de errado rolou", error)
            }
        }



        async function getUser() {
            const users = await BuscarUsuarios()
            setUsuarios(users)

        }

        getIdeia({ id })
        getUser()

    }, [])



    return (
        <div className="w-full h-full min-h-max">
            <PontuarLayout data={ideiaPendente} id={id} username={usuarios} />

            {/*   <div className="w-full h-full min-w-10/12 flex flex-col items-center text-center justify-start p-5 gap-5">

                <div className="flex flex-col w-10/12 p-5  gap-5 items-center text-center justify-center
            bg-white rounded-md border border-zinc-200">
                    em manutenção
                </div>
            </div> */}

        </div>
    )
}