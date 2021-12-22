import {userType} from "../types/typpes";

//LOGIN
export const LoginStart = (userCredentials: any) => ({
    type: "LOGIN_START"
} as const)

export const LoginSuccess = (user: userType) => {
    return {
        type: "LOGIN_SUCCESS",
        user,
    } as const
}
export const LoginFailure = () => ({
    type: "LOGIN_ERROR"
} as const)

//LOGOUT
export const Logout = ()=>({
    type: 'LOGOUT'
} as const)

//LOGIN
export const UpdateStart = (userCredentials: any) => ({
    type: "UPDATE_START"
} as const)

export const UpdateSuccess = (user: userType) => {
    return {
        type: "UPDATE_SUCCESS",
        user,
    } as const
}
export const UpdateFailure = () => ({
    type: "UPDATE_ERROR"
} as const)

export type ActionsType =
    ReturnType<typeof LoginStart>
    | ReturnType<typeof LoginSuccess>
    | ReturnType<typeof LoginFailure>
    | ReturnType<typeof Logout>
    | ReturnType<typeof UpdateStart>
    | ReturnType<typeof UpdateSuccess>
    | ReturnType<typeof UpdateFailure>
