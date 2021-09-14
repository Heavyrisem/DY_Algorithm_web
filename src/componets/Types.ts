
export enum LANGUAGETYPE {
    NODEJS = "node",
    PYTHON3 = "python3",
    C = "gcc"
}


export interface AuthedRequest {
    U_Token: string
}

export interface CompileRequest extends AuthedRequest {
    TYPE: LANGUAGETYPE
    code: string
    Challenge_NO: number
}
export interface CompileResponse {
    stdout?: string
    stderr?: string
}