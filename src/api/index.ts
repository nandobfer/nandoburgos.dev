import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:4103/api",
    //baseURL: "http://192.168.15.19:4103/api",
    // baseURL: "https://app.agenciaboz.com.br:4103/api",
    timeout: 1000 * 10,
})
