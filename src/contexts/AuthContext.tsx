import { createContext, ReactNode, useState } from 'react';

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean; //para verificar se o user esta logado
    signIn: (credentials: SignInProps) => Promise<void>
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




//provendo as informações
export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>()//informações do user
    const isAuthenticated = !!user; //convertando a variavel user em boolean. se estiver vazio false

    //logando user
    async function signIn() {
        alert("Clicou no login")
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }} >
            {children}
        </AuthContext.Provider>
    )
}