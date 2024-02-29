"use client"
import Ranking from "@/components/Ranking";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";

export default function UserHomePage() {


    const router = useRouter()
    const roles = Cookies.get("roles")
    console.log(roles)


    return (
        <>
            {
                roles === 'Admin' ? router.push("/admin") : <Ranking />
            }
        </>
    )

}