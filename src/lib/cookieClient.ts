import {getCookie} from 'cookies-next';

//pegando token
export function getCookieClient(){
    const token = getCookie("session");

    return token;
}