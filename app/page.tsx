"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userTypes } from "@/types/userTypes";
import { useRouter } from 'next/navigation'
import { useState } from "react";

export default function Home() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')


  function logar({ email, pass }: any) {

    if (email === "admin") {

      if (pass === "1234") {
        return router.push("/admin")
      }
      alert("senha errada")
    }
    console.log("email errado")

  }


  return (
    <div className="w-screen h-screen gap-5
        flex flex-col items-center text-center justify-center
        bg-gradient-to-r from-emerald-500 to-blue-500  ">

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
          <Button className="w-6/12 " onClick={() => logar({ email, pass })}> Entrar </Button>
        </div>
      </div>
    </div>
  );
}
