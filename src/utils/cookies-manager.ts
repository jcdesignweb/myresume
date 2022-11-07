import Cookies from 'universal-cookie';


export enum CookiesTypes {
    isAnimated = "isAnimated",
}

const cookies = new Cookies();

export const getCookie = (key: string) => {
    return cookies.get(key)
}

export const setCookie = (key: string, value: any) => {
    cookies.set(key, value, { path: '/' });
}