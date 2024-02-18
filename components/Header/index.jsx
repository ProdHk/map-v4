import Link from "next/link";
import { LuPlusSquare } from "react-icons/lu";
import { Input } from "../ui/input";

export default function Header() {

    return (
        <div className="w-11/12 mt-2 h-20 bg-white flex flex-row rounded-md
        border-l border-l-zinc-50  justify-center 
        ">
            <div className="w-10/12 px-5 flex flex-row items-center text-center justify-between">
                <Input type="text"
                    placeholder="Pesquise aqui"
                    className=" h-3/6 rounded-md w-8/12 text-center items-center" />
                <Link href={''}
                    className="bg-emerald-800 hover:bg-emerald-600 hover:text-black text-white p-3 w-16 flex  justify-center text-2xl rounded-md
                    transition-all ease-in-out">
                    <LuPlusSquare />
                </Link >
            </div>
        </div>
    )
}