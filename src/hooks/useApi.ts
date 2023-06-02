import { api } from "../api"
import { useLanguages } from "./useLanguages"
import { useSnackbar } from "burgos-snackbar"

interface ApiOptions {
    data?: object | FormData
    callback: Function
    errorCallback?: Function
    finallyCallback?: Function
}

export const useApi = () => {
    const { languages } = useLanguages()
    const { snackbar } = useSnackbar()

    const defaultError = (error: Error, errorCallback?: Function) => {
        errorCallback && errorCallback()
        console.error(error)
        snackbar({
            severity: "error",
            text: "Erro desconhecido",
        })
    }

    const defaultFinally = (finallyCallback?: Function) => {
        finallyCallback && finallyCallback()
    }

    const methods = {
        languages: {
            list: (callback: Function) => callback(languages),
        },
        sheets: {
            get: (options: ApiOptions) => {
                api.get("/sheets")
                    .then((response) => options.callback(response))
                    .catch((error) => defaultError(error, options.errorCallback))
                    .finally(() => defaultFinally(options.finallyCallback))
            },
            add: (options: ApiOptions) => {
                api.post("/sheets/add", options.data)
                    .then((response) => options.callback(response))
                    .catch((error) => defaultError(error, options.errorCallback))
                    .finally(() => defaultFinally(options.finallyCallback))
            },
            update: (options: ApiOptions) => {
                api.post("/sheets/update", options.data)
                    .then((response) => options.callback(response))
                    .catch((error) => defaultError(error, options.errorCallback))
                    .finally(() => defaultFinally(options.finallyCallback))
            },
        },
        user: {
            list: (options: ApiOptions) => {
                api.get("/user")
                    .then((response) => options.callback(response))
                    .catch((error) => defaultError(error, options.errorCallback))
                    .finally(() => defaultFinally(options.finallyCallback))
            },
            login: (options: ApiOptions) => {
                api.post("/user", options.data)
                    .then((response) => options.callback(response))
                    .catch((error) => defaultError(error, options.errorCallback))
                    .finally(() => defaultFinally(options.finallyCallback))
            },
        },
    }

    return methods
}
