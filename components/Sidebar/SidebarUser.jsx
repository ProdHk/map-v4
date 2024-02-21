
import Link from "next/link";
import { userMenuItems } from '@/statics/MenuItems'


export default function SidebarUser() {


    return (
        <div className="flex flex-col  bg-white  rounded-e-md w-2/12 p-3 gap-5 border-r border-r-zinc-200">

            {/*   <h2 className="text-md font-semibold  text-emerald-700">
                Programa de excelência no trabalho
            </h2> */}
            <h2 className=" p-5 text-3xl font-semibold  text-emerald-700">
                J.Lemara
            </h2>

            <nav className="flex flex-col max-h-[500px] items-center justify-evenly text-center gap-3 mt-16">
                {
                    userMenuItems?.map(({
                        id, name, icon, path,
                    }) =>
                        <Link href={path} key={id}
                            className='flex flex-row w-11/12 gap-5 h-8 hover:cursor-pointer 
                            items-center text-center px-5 text-zinc-600 rounded-md 
                            hover:text-white p-5 hover:border hover:border-emerald-600
                            hover:bg-emerald-800 transition-all ease-in-out
                            '
                        >

                            <p className='text-xl  '>
                                {icon}
                            </p>
                            <p className='text-lg '>
                                {name}
                            </p>
                        </Link>
                    )
                }
            </nav>
        </div>
    )
}