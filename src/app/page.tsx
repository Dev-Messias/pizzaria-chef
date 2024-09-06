import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import logoImg from '../assets/chef-pizza.jpg'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator';
import { Lock, Mail } from 'lucide-react';
import Link from 'next/link';


export default function Home() {
  return (
    <main className='w-full h-screen bg-red-800 flex flex-col items-center justify-center' >
      <div className='w-full px-3 max-w-xl m-auto' >
        <Card className='w-full' >
          <CardHeader className='w-full flex flex-col items-center' >
            <div className='w-full flex flex-col gap-2 items-center justify-center' >
              <Image
              src={logoImg}
              alt="Pizzaria Logo"
              className='w-40 h-40 rounded-full'
              />
              <CardTitle className='font-bold text-4xl' >Pizzaria<span className='text-red-700 -ms-2' >Chef</span></CardTitle>
            </div>

            <CardDescription className='w-full text-center ' >
              Acesse a plataforma para gerenciar sua pizzaria.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className='flex flex-col gap-4' >
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
                <Button className='w-full' >Acessar</Button>
              </div>
              <Separator/>
              <div className='w-full flex flex-col items-center' >
                <Link href='/signup' className=' cursor-pointer text-sm font-medium text-slate-600' >Não possui uma conta? <span className='text-cyan-600' >Cadastre-se</span></Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
