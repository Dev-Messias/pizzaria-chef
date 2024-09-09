"use client"
import { Sheet, SheetTrigger, SheetContent } from '../../../../components/ui/sheet';
import { Button } from '../../../../components/ui/button';
import Link from 'next/link';
import { ChartBarStacked, Home, LogOut, Menu, Package, PanelBottom, Settings2, ShoppingBag, Users } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '../../../../components/ui/tooltip';
import logoSistema from '../../../../assets/chef-pizza.jpg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export function Sidebar() {
    const router = useRouter();

    async function handleLogout() {

        deleteCookie("session", { path: "/" })
        router.replace("/");
    }

    return (
        <div className="flex w-full flex-col bg-muted/40" >


            <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 border-r border-red-700 bg-background sm:flex flex-col' >
                <nav className='flex flex-col items-center gap-4 px-2 py-5' >
                    <TooltipProvider>
                        <Link href="#"
                            className='flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full'
                        >
                            {/* <Package className='h-4 w-4' /> */}
                            <Avatar>
                                <AvatarImage src='https://st2.depositphotos.com/5963850/9202/v/450/depositphotos_92027642-stock-illustration-chef-pizza-banner.jpg' alt="User Avatar" />
                            </Avatar>
                            <span className='sr-only' >Pizzaria-Chef</span>
                        </Link>

                        <Tooltip>
                            <TooltipTrigger asChild >
                                <Link href="/dashboard"
                                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
                                >
                                    <Home className='h-4 w-4' />
                                    <span className='sr-only' >Inicio</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right' >Inicio</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild >
                                <Link href="#"
                                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
                                >
                                    <ChartBarStacked className='h-4 w-4' />
                                    <span className='sr-only' >Categoria</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right' >Categoria</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild >
                                <Link href="#"
                                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
                                >
                                    <Package className='h-4 w-4' />
                                    <span className='sr-only' >Produtos</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right' >Produtos</TooltipContent>
                        </Tooltip>


                    </TooltipProvider>
                </nav>

                <nav className='mt-auto flex flex-col items-center gap-4 px-2 py-5' >
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild >
                                <form action={handleLogout}
                                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
                                >

                                    <button type='submit' ><LogOut className='h-4 w-4 text-red-500' /></button>
                                    <span className='sr-only' >Sair</span>
                                </form>
                            </TooltipTrigger>
                            <TooltipContent side='right' >Sair</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>

            <div className=" sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14" >
                <header className='sticky top-0 z-30 flex h-14 items-center justify-between px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6  ' >
                    <h2 className='font-bold text-xl' >Pizzaria<span className='text-red-700 -ms-1' >Chef</span></h2>
                    <Sheet>
                        <SheetTrigger asChild >
                            <Button size='icon' variant='outline' className='sm:hidden' >
                                <Menu className='w-5 h-5' />
                                <span className='sr-only' >Abrir / fechar menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className='sm:max-w-xs' >
                            <nav className='grid gap-6 text-lg font-medium' >
                                <Link
                                    href='#'
                                    className='flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2'
                                    prefetch={false}
                                >
                                    {/* <Package className='h5 w-5 transition-all' />
                                    <span className='sr-only' >Logo</span> */}
                                    <Avatar>
                                        <AvatarImage src='https://st2.depositphotos.com/5963850/9202/v/450/depositphotos_92027642-stock-illustration-chef-pizza-banner.jpg' alt="User Avatar" />
                                    </Avatar>
                                    <span className='sr-only' >Pizzaria-Chef</span>
                                </Link>

                                <Link
                                    href='#'
                                    className='flex items-center  text-muted-foreground gap-4 hover:text-foreground'
                                    prefetch={false}
                                >
                                    <Home className='h5 w-5 transition-all' />
                                    Inicio
                                </Link>

                                <Link
                                    href='#'
                                    className='flex items-center  text-muted-foreground gap-4 hover:text-foreground'
                                    prefetch={false}
                                >
                                    <ChartBarStacked className='h-4 w-4' />
                                    Categoria
                                </Link>

                                <Link
                                    href='#'
                                    className='flex items-center  text-muted-foreground gap-4 hover:text-foreground'
                                    prefetch={false}
                                >
                                    <Package className='h5 w-5 transition-all' />
                                    Produtos
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>

                </header>
            </div>


        </div>
    )
}