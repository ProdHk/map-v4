import { DeleteIdeia, GetIdeia, PostIdeia, PutIdeia } from '@/controllers/Map/IdeiasController'
import { mapTypes } from '@/types/mapTypes'

export async function GET() {

    try {
        const ideias = await GetIdeia()
        return Response.json(ideias)
    } catch (error) {
        return Response.json({ msg: "Ocorreu algum erro", error })
    }
}


export async function POST(req: Request) {

    try {
        const { titulo, empresa, setor, desc, breveDesc, envolvidos, impactos, usuario } = await req.json()
        const novaIdeia = await PostIdeia(<mapTypes>{ titulo, empresa, setor, desc, breveDesc, envolvidos, impactos, usuario })
        return Response.json({ msg: "Adicionado com sucesso!", novaIdeia })

    } catch (error) {
        return Response.json({ msg: "não foi possivel adicionar", error })

    }

}


export async function PUT(req: Request) {

    try {
        const { id, pontos } = await req.json()
        const pontuarIdeia = await PutIdeia(<mapTypes>{ id, pontos })
        return Response.json({ msg: "Adicionado com sucesso!", pontuarIdeia })

    } catch (error) {
        return Response.json({ msg: "não foi possivel adicionar", error })

    }

}
export async function DELETE(req: Request) {

    try {
        const { id } = await req.json()
        await DeleteIdeia(<mapTypes>{ id })
        return Response.json({ msg: "Deletado com sucesso!" })

    } catch (error) {
        return Response.json({ msg: "não foi possivel deletar", error })

    }

}





