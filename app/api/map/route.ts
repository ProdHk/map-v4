import { GetAllMaps, GetMapById, GetMapsPendentes } from "@/controllers/MapController";
import { mapTypes } from "@/types/mapTypes";


/* BUSCA TODOS OS MAPS */
export async function GET() {

    try {
        const data = await GetAllMaps()
        return Response.json(data)
    } catch (error) {
        return Response.json(error)
    }
}

/* BUSCA POR ID NO MEIO DE TODOS OS MAPS */
export async function POST(req: Request) {

    try {
        const { id } = await req.json()
        const data = await GetMapById(<mapTypes>{ id })
        return Response.json(data)
    } catch (error) {
        return Response.json(error)
    }


}

/* BUSCA  TODOS OS MAPS PENDENTES */
export async function PUT(req: Request) {

    try {

        const data = await GetMapsPendentes()
        return Response.json(data)
    } catch (error) {
        return Response.json(error)
    }


}



