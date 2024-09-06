import {cookies} from 'next/headers';

//pegando token
export function getCookieServer(){
    const token = cookies().get("session")?.value;

    return token || null;
}