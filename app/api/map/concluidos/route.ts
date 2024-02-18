import { GetAllMaps } from "@/controllers/MapController";

import { mapTypes } from "@/types/mapTypes";
/* BUSCA TODAS AS IDEAIS */

export async function GET() {

    try {
        const data: any = await GetAllMaps()
        const concluidos = data.filter(({ estado }: mapTypes) => estado === true)
        return Response.json(data)
    } catch (error) {
        return Response.json(error)
    }
}


