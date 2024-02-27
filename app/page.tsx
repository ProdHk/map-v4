"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import { LogarUsuario } from '@/services/usuarios'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Cookies from 'js-cookie';

export default function Home() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [popup, setPopup] = useState(false)


  return (
    <div className="w-screen h-screen gap-5
        flex flex-col items-center text-center justify-center
        bg-gradient-to-r from-emerald-500 to-blue-500  ">

      <Alert variant="destructive" className={` 
      ${popup === false ? "hidden" : "visible"}
      transition-all ease-in-out
      bg-white w-4/12`  }>
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Algo de errado aconteceu !</AlertTitle>
        <AlertDescription>
          O email ou senha estão incorretos!
        </AlertDescription>
      </Alert>
      <div className="w-6/12 h-5/6
            flex flex-col items-center
            p-5 gap-5 ">
        <div className="flex flex-col w-10/12 h-6/6 gap-5 p-5 items-center text-start justify-center
                border border-emerald-500 rounded-md bg-white
                ">

          <h2 className="text-2xl font-semibold p-3 text-center text-emerald-500">
            Programa de excelência no trabalho
          </h2>



          <h4 className="text-xl font-medium text-center p-5">Preencha seus dados para fazer login</h4>
          <div className="w-6/12 felx flex-col gap-3 h-20">
            <label>E-mail</label>
            <Input placeholder="Digite aqui" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="w-6/12 felx flex-col gap-3 h-20">
            <label>Senha</label>
            <Input placeholder="Digite aqui" type="password" onChange={(e) => setPass(e.target.value)} />
          </div>
          <Button className="w-6/12 " onClick={async () => {
            try {
              const user: any = await LogarUsuario({ email, pass })


              if (user === false) {
                setPopup(true)

                setTimeout(() => {

                  setPopup(false)

                }, 5000);
                return
              }
              // adicionando o id do usuario em cookie

              Cookies.set('userId', user._id);
              Cookies.set('userName', user.nome);
              /* 
              const userIdFromCookie = Cookies.get('userId'); */

              user.roles === "Admin" ?
                router.push('/admin')
                :
                router.push('/map')
            } catch (error) {
              console.log("não foi possivel fazer login", error)
            }
          }}> Entrar </Button>
        </div>
      </div>

    </div>
  );
}
