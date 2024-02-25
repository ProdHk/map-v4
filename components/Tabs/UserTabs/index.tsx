"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ListIdeiasPendentesUsuario from '@/components/List/ListIdeiasUsuario'
import ListMelhoriasUsuario from '@/components/List/ListMelhoriasUsuario'
import ListResumosUsuario from '@/components/List/ListResumosUsuario'
import { useEffect, useState } from "react"
import { mapTypes } from "@/types/mapTypes"

export default function UserTabs(data: any) {
    const { ideias, melhorias, resumos } = data



    return (
        <Tabs defaultValue="account" className="w-full ">
            <TabsList className="p-5 m-5">

                <TabsTrigger value="ideias">Ideias</TabsTrigger>
                <TabsTrigger value="melhorias">Melhorias</TabsTrigger>
                <TabsTrigger value="resumo">Resumo</TabsTrigger>
            </TabsList>
            <TabsContent value="ideias" className="flex flex-col items-center text-center justify-center">
                <ListIdeiasPendentesUsuario ideias={ideias} />
            </TabsContent>
            <TabsContent value="melhorias">
                <ListMelhoriasUsuario melhorias={melhorias} />
            </TabsContent>
            <TabsContent value="resumo">
                <ListResumosUsuario resumos={resumos} />
            </TabsContent>
        </Tabs>

    )
}