import {useContext, FormEvent, useState} from 'react'
import Head from "next/head";
import Image from "next/image";
import { Input } from '../components/ui/input';
import { Button } from "../components/ui/Button";

import {AuthContext} from '../contexts/AuthContext';

import Link from 'next/link';

import logo from '../assets/pizza.png'

export default function Home() {

  const {signIn} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);


  async function handleLogin(event: FormEvent){
    event.preventDefault();//não recarregar a pagina

    let data = {
      email,
      password
    }

    await signIn(data);
  }

  return (
    <>
      <Head>
        <title>PizzariaChef - Faça seu login</title>
      </Head>
      <div className=" w-full h-screen flex flex-col items-center justify-end bg-gradient-to-r from-rose-800 to-pink-950" >
        <div className="w-full h-screen flex flex-col md:flex-row items-center justify-end md:px-3  md:max-w-[800px] lg:max-w-[1000px] 2xl:max-w-[1300px] md:m-auto " >
          <div className="w-full flex flex-col justify-center items-center mt-9 px-12  mb-7 md:flex-1" >
            <Image className="w-52" src={logo} alt="logo" />
            <h1 className="w-full text-center font-bold  text-4xl text-slate-100" >Pizzaria<span className="text-yellow-500 -mr-6 tracking-tighter -ms-2" >DoCheff</span> </h1>
          </div>
          <div className="w-full  bg-slate-50 bg-opacity-95  flex flex-col flex-1 items-start py-0 md:py-10 px-12  justify-center md:rounded-ss-none md:rounded-br-xl rounded-ss-[40px] rounded-se-[40px]" >
            <h3 className="font-semibold text-red-700 text-3xl" >Login</h3>
            <p className="text-md text-slate-700 font-semibold mb-6 mt-3" >Faça login e Gerencie sua pizzaria.</p>
            <div className="w-full flex flex-col ">
              <form onSubmit={handleLogin}  >
                <Input 
                  className=" w-full mb-4 h-10  border-b-[1px] border-slate-800 bg-transparent  " 
                  placeholder="Digite seu email" 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                  className=" w-full mb-4 h-10  border-b-[1px] border-slate-800 bg-transparent  " 
                  placeholder="Sua senha" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  type="submit"
                  loading={loading}
                  className="w-full flex flex-row items-center justify-center py-2 rounded-2xl md:mb-2 text-slate-50 font-bold mt-2 bg-gradient-to-r from-rose-800 to-pink-950"

                >Acessar</Button>
              </form>
              <Link href="/signup" >
              <p className=" text-center text-sm mt-5  font-medium text-slate-700 underline cursor-pointer" >Não possui uma conta? Cadastre-se</p>
              </Link>
              </div>
              
          </div>
        </div>
      </div>
    </>
  );
}
