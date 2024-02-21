"use client"
import { GetAllMapsPendentes } from "@/services/map";
import { BuscarUsuarios } from "@/services/usuarios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ListIdeiasPendentes() {

    const [ideias, setIdeias] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function fetchIdeiasPendentes() {
            try {
                const ideiasPendentes = await GetAllMapsPendentes();
                const users = await BuscarUsuarios();
                setIdeias(ideiasPendentes);
                setUsuarios(users);
                setCarregando(false); // Definir carregamento como false quando as ideias forem obtidas
            } catch (error) {
                console.error("Erro ao buscar ideias pendentes:", error);
                setCarregando(false); // Definir carregamento como false em caso de erro
            }
        }

        fetchIdeiasPendentes();
    }, []);
    return (
        <div className="flex flex-col w-10/12 h-max gap-5 bg-white rounded-md ">
            <h2 className="font-semibold text-lg text-start p-5">
                Pendentes de pontuação
            </h2>
            <div className="flex flex-col p-5 gap-5">
                <div className="flex flex-row ">
                    <h2 className="w-4/12 text-center font-semibold">Colaborador</h2>
                    <h2 className="w-4/12 text-center font-semibold">Data de Cadastro</h2>
                    <h2 className="w-4/12 text-center font-semibold">Título</h2>
                </div>
                {carregando ? ( // Verifica se está carregando
                    <h2>Carregando...</h2>
                ) : (
                    ideias?.length > 0 ? ideias.map(({ _id, titulo, usuario, dataCadastro }) => {
                        const username = usuarios.find(({ _id }) => _id === _id)
                        console.log(username)
                        return (<Link href={`/admin/pontuar/${_id}`} key={_id}
                            className="flex flex-row border rounded-md border-zinc-100 py-2">
                            <p className="w-4/12 text-center">{username.nome}</p>
                            <p className="w-4/12 text-center">{dataCadastro}</p>
                            <p className="w-4/12 text-center">{titulo}</p>
                        </Link>)
                    }) :
                        <h2>Nenhuma pendencia por aqui</h2>
                )}
            </div>
        </div>
    );
}
