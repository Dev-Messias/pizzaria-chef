import {NextRequest, NextResponse} from 'next/server';
import {getCookieServer} from './lib/cookieServer';
import {api} from './services/api';

export async function middleware(req: NextRequest) {

    const {pathname} = req.nextUrl // pegando qual rota o usuario esta navegando

    if(pathname.startsWith("/_next") || pathname === "/"){
        return NextResponse.next(); //deixando acessar a rota mesmo não estando logado
    }
    
    const token = getCookieServer();
    
    if(pathname.startsWith("/dashboard")){
        if(!token){
            return NextResponse.redirect(new URL("/", req.url))
        }

        const isValid = await validateToken(token);

        if(!isValid){
            return NextResponse.redirect(new URL("/", req.url))
        }
    }

    return NextResponse.next();
}


async function validateToken(token: string) {
    if(!token) return false;

    try {

        await api.get("/me", {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        return true
        
    } catch (err) {
        console.log(err);
        return false
    }
}