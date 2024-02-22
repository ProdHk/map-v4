import { DeleteResumo, GetResumos, PostResumo, PutResumo } from "@/controllers/Map/ResumosController"

import { mapTypes } from "@/types/mapTypes"

export async function GET() {

    try {
        const resumos = await GetResumos()
        return Response.json(resumos)
    } catch (error) {
        return Response.json({
            msg: "Aconteceu algo de errado",
            error
        })

    }
}


export async function POST(req: Request) {

    try {
        const { empresa, usuario, titulo, desc, beneficios, autor, frase } = await req.json()
        const novoResumo = await PostResumo(<mapTypes>{ empresa, usuario, titulo, desc, beneficios, autor, frase })
        return Response.json(novoResumo)
    } catch (error) {
        return Response.json({
            msg: "Aconteceu algo de errado",
            error
        })

    }


}
export async function PUT(req: Request) {

    try {
        const { id, pontos } = await req.json()
        const pontuarResumo = await PutResumo(<mapTypes>{ id, pontos })
        return Response.json(pontuarResumo)
    } catch (error) {
        return Response.json({
            msg: "Aconteceu algo de errado",
            error
        })

    }
}


export async function DELETE(req: Request) {

    try {
        const { id } = await req.json()
        await DeleteResumo(<mapTypes>{ id })
        return Response.json({ msg: "Deletado com sucesso" })
    } catch (error) {
        return Response.json({
            msg: "Aconteceu algo de errado",
            error
        })
    }


}



