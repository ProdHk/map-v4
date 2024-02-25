"use client"

import UsuariosTable from '@/components/List/UsuariosCadastrados'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
export default function Handler() {
    const router = useRouter()
    return (
        <div className='w-full m-5 flex flex-col items-center justify-center text-center gap-5'>
            <Button onClick={() => router.push('/admin/usuarios/cadastrar')} className='w-2/12 h-10 flex flex-row items-center justify-center text-center rounded-md 
bg-emerald-700 border border-white'>
                Cadastrar
            </Button>
            <UsuariosTable />
        </div>
    )
}