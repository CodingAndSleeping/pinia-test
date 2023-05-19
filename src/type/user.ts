export interface IUserResponse {
    code: number,
    message: string,
    data: IUserResData,
}

export interface IUserResData{
    token:string,
    username:string
}

export interface IUserLoginData{
    username:string,
    password:string
}