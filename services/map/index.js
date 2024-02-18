import axios from "axios"

const url = "/api/map"


export async function GetAllMaps() {
    try {
        const all = await axios.get(url).then((res) => res)
        return all
    } catch (error) {
        console.log("algo de errado", error)
    }
}
export async function GetAllMapsPendentes() {
    try {
        const all = await axios.put(url).then((res) => res.data)
        return all
    } catch (error) {
        console.log("algo de errado", error)
    }
}
export async function GetOneMapById({ id }) {

    try {
        const map = await axios.post(url, { id }).then((res) => res.data)
        return map
    } catch (error) {
        console.log("algo de errado", error)
    }
}
