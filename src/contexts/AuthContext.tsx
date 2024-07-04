import { createContext, ReactNode, useState } from 'react';
import { destroyCookie, setCookie, parseCookies } from 'nookies';
import Router from 'next/router';
import {api} from '../services/apiClient';

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean; //para verificar se o user esta logado
    signIn: (credentials: SignInProps) => Promise<void>
    signOut: () => void
}

type UserProps = {
    id: string;
    name: string;
    email: string;
}

type SignInProps = {
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut(){
    try {
        //destruindo token e redirecioando para tela de login
        destroyCookie(undefined, '@pizzariaCheff.token')
        Router.push('/')
    } catch{
        console.log("erro ao deslogar")
    }
}


//provendo as informações
export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>()//informações do user
    const isAuthenticated = !!user; //convertando a variavel user em boolean. se estiver vazio false

    //logando user
    async function signIn({email, password}: SignInProps) {
        try {
            const response = await api.post('/session', {
                email, 
                password
            })

            //console.log(response.data)
            const {id, name, token} = response.data
            setCookie(undefined, '@pizzariaCheff.token', token, {
                maxAge: 60 * 60 * 24 * 30, //expirar em 1 mes
                path: "/" // Quais caminhos terao acesso ao cookies
            } )

            setUser({
                id,
                name,
                email,
            })

            //Passar para proximas requisições o token
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            //redirecionar user para /dashboard
            Router.push('/dashboard')
            
        } catch (err) {
            console.log("Erro ao acessar: ", err)
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }} >
            {children}
        </AuthContext.Provider>
    )
}