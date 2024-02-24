import UsuariosTable from '@/components/List/UsuariosCadastrados'
import { Button } from '@/components/ui/button'
export default function Handler() {

    return (
        <div className='w-full m-5 flex flex-col items-center justify-center text-center gap-5'>
            <Button className='w-2/12 h-10 flex flex-row items-center justify-center text-center rounded-md 
bg-emerald-700 border border-white'>
                Cadastrar
            </Button>
            <UsuariosTable />
        </div>
    )
}