
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import logoImg from '../../assets/chef-pizza.jpg'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator';
import { Lock, Mail, User } from 'lucide-react';
import Link from 'next/link';
import { api } from '../../services/api';
import {redirect} from 'next/navigation'

export default function Signup(){

  async function handleRegister(formData: FormData){
    "use server" //diretiva para o lado do servidor

    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    if(name === "" || email === "" || password === "" ){
      return;
    }

    //criando conta
    try {

      await api.post("/users", {
        name,
        email,
        password
      })
      
    } catch (err) {
      console.log("Error :")
      console.log(err)
    }

    redirect("/");
  }

    return(
        <main className='w-full h-screen bg-red-800 flex flex-col items-center justify-center' >
        <div className='w-full px-3   max-w-xl m-auto' >
          <Card className='w-full' >
            <CardHeader className='w-full flex flex-col items-center' >
              <div className='w-full flex flex-col  items-center justify-center' >
                <Image
                src={logoImg}
                alt="Pizzaria Logo"
                className='w-40 h-40 rounded-full'
                />
                <CardTitle className='font-bold text-4xl' >Pizzaria<span className='text-red-700 -ms-2' >Chef</span></CardTitle>
              </div>
  
              <CardDescription className='w-full text-center ' >
                Criando sua conta.
              </CardDescription>
            </CardHeader>
  
            <CardContent>
              <form action={handleRegister} className='flex flex-col gap-1' >
              <div className='flex flex-col gap-2' >
                  <div className='flex flex-row items-center gap-1 mb-1' >
                    <User className='w-4 h-4 select-none' />
                    <Label>Nome</Label>
                  </div>
                  <Input 
                    type='text'
                    required
                    name='name'
  
                  />
                </div>

                <div className='flex flex-col gap-2' >
                  <div className='flex flex-row items-center gap-1 mb-1' >
                    <Mail className='w-4 h-4 select-none' />
                    <Label>E-mail</Label>
                  </div>
                  <Input 
                    type='email'
                    required
                    name='email'
  
                  />
                </div>
  
                <div className='flex flex-col gap-2' >
                  <div className='flex flex-row items-center gap-1 mb-1' >
                    <Lock className='w-4 h-4 select-none' />
                    <Label>Senha</Label>
                  </div>
                  <Input 
                     type='password'
                     required
                     name='password'
                  />
                </div>
  
                <div className='w-full flex flex-col items-center px-10 mt-2 mb-3' >
                  <Button type='submit' className='w-full' >Cadastrar</Button>
                </div>
                <Separator/>
                <div className='w-full flex flex-col items-center' >
                  <Link href='/' className=' cursor-pointer text-sm font-medium text-slate-600' >Já possui uma conta? <span className='text-cyan-600' >Faça o login</span></Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    )
}