
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


export interface RegisterRequest {
    U_ID: string
    U_PW: string
    U_Nickname: string
    U_Email: string
}
export interface RegisterResponse {
    success: boolean
    U_Token?: string
    U_Nickname?: string
    reason?: string
}
export interface Login_Model_Param_T {
    U_ID: string
    U_PW: string
}
export interface LoginResponse {
    success: boolean
    U_Token?: string
    U_Nickname?: string
    reason?: string
}