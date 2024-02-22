import { AddPontos } from "@/controllers/Map/PontosController"
import { userTypes } from '@/types/userTypes'



export async function GET() {

}



export async function POST(req: Request) {

    try {
        const { id, pontos } = await req.json()
        await AddPontos(<userTypes>{ id, pontos })
        return Response.json({ msg: "Pontuação adicionada com sucesso" })

    } catch (error) {
        console.log("Não foi possivel adicionar os pontos", error)
        return Response.json({ msg: "falhou" })
    }


}

export async function PUT(req: Request) {

}

export async function DELETE(req: Request) {

}