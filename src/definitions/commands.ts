export interface Command {
    id: number
    command: string
    callback: Function
    stdout?: boolean
}
