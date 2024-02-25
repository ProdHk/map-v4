"use client"
import { GetAllMapsPendentes } from "@/services/map";
import { BuscarIdeiasPendentes } from "@/services/map/Ideias";
import { BuscarUsuarios } from "@/services/usuarios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { mapTypes } from "@/types/mapTypes"
export default function ListIdeiasPendentesUsuario(data) {
    const melhorias = data.melhorias


    return (
        <div className="flex flex-col w-full h-max gap-5 bg-white rounded-md ">

            <div className="w-full flex flex-col p-5 gap-5  ">


                <div className="flex flex-row ">
                    <h2 className="w-4/12 text-center font-semibold">Data de Cadastro</h2>
                    <h2 className="w-8/12 text-center font-semibold">Título</h2>
                </div>


                {melhorias?.length > 0 ? melhorias.map(({ _id, titulo, descMelhoria, dataCadastro }) => {

                    return (
                        <Link href={`/admin/ideias/${_id}`} key={_id}
                            className=" w-full flex flex-row border rounded-md border-zinc-100 py-2 
                                hover:bg-slate-100 hover:border-slate-200
                                transition-all ease-in-out">
                            <p className="w-4/12 text-center">{dataCadastro}</p>
                            <p className="w-8/12 text-center">{descMelhoria}</p>
                        </Link>
                    )
                }) :
                    <h2>Nenhuma ideia foi encontrada</h2>
                }


            </div>
        </div>
    );
}
