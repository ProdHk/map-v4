import Map from '@/models/Map'
import { mapTypes } from "@/types/mapTypes"


export async function GetAllMaps() {

    try {
        const map = await Map.find()
        return map
    } catch (error) {
        return error


    }
}
export async function GetMapsPendentes() {

    try {
        const map = await Map.find({ estado: false })
        return map
    } catch (error) {
        return error


    }
}


export async function GetMapById({ id }: mapTypes) {

    try {
        const map = await Map.find({ _id: id }).then((res) => res[0])
        return map
    } catch (error) {
        return error
    }
}


export async function DeleteMap({ id }: mapTypes) {

    try {
        await Map.findByIdAndDelete(id)
        return
    } catch (error) {
        return error
    }
}
