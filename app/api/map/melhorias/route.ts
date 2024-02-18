import { DeleteMelhoria, GetMelhorias, PostMelhoria, PutMelhoria } from "@/controllers/Map/MelhoriasController";
import { mapTypes } from "@/types/mapTypes"

export async function GET() {
    try {
        const melhorias = await GetMelhorias()
        return Response.json(melhorias)
    } catch (error) {
        return Response.json({ msg: "Houve algo de errado", error })

    }
}


export async function POST(req: Request) {

    try {
        const { titulo, empresa, desc, usuario } = await req.json()
        const novaMelhoria = await PostMelhoria(<mapTypes>{ titulo, empresa, desc, usuario })
        return Response.json(novaMelhoria)
    } catch (error) {
        return Response.json({ msg: "Houve algo de errado", error })

    }

}

export async function PUT(req: Request) {

    try {
        const { id, pontos } = await req.json()
        const pontuarMelhoria = await PutMelhoria(<mapTypes>{ id, pontos })
        return Response.json(pontuarMelhoria)
    } catch (error) {
        return Response.json({ msg: "Houve algo de errado", error })

    }

}



export async function DELETE(req: Request) {

    try {
        const { id } = await req.json()
        await DeleteMelhoria(<mapTypes>{ id })
        return Response.json({ msg: "Deletado com sucesso" })
    } catch (error) {
        return Response.json({ msg: "Houve algo de errado", error })

    }

}



