import FormCadastrarUsuario from '@/components/Forms/CadastrarUsuario'
import UsuariosTable from '@/components/List/UsuariosCadastrados'
import { Button } from '@/components/ui/button'
export default function Handler() {

    return (
        <div className='w-full m-5 flex flex-col items-center justify-center text-center gap-5'>

            <FormCadastrarUsuario />
        </div>
    )
}