"use client"
import UsuariosCadastradosEdit from '@/components/List/UsuariosCadastradosEdit'
import { useRouter } from 'next/navigation'
export default function Handler() {
    return (
        <div className='w-full m-5 flex flex-col items-center justify-center text-center gap-5'>

            <UsuariosCadastradosEdit />
        </div>
    )
}