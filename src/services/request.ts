import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import {JSDOM, BaseOptions, DOMWindow} from "jsdom";

const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36";

export async function standardRequest(url: string, method: 'GET' | 'POST', additional_options: AxiosRequestConfig = {}): Promise<any>{
    // Standard fetching request 

    const defaultHeaders: RawAxiosRequestHeaders = {}

    const options: AxiosRequestConfig = {...additional_options, method}
    options.headers = {...options.headers, ...defaultHeaders}

    let { data } = await axios.get(url, options);
    return data
}

export async function domRequest(url: string, additional_options: BaseOptions = {}): Promise<DOMWindow>{
    // Requests with JSDOM, returning window object to access to the gotten page

    const options: BaseOptions = { runScripts: "dangerously", ...additional_options, userAgent}

    const dom: JSDOM = await JSDOM.fromURL(url, options);
    return dom.window; 
}