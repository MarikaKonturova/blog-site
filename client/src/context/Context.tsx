import React, {createContext, FC, useEffect, useReducer} from "react";
import {Reducer} from "./Reducer";
import {ActionsType} from "./Actions";
import {userType} from "../types/typpes";

let userToValidate : userType | null = null
if(typeof window !== 'undefined'){
    userToValidate= localStorage.getItem('user')? JSON.parse(localStorage.getItem('user') as string) : null
}
export const InitialState = {
    user: userToValidate,
    isFetching: false,
    error: false
}
export type initialStateType = typeof InitialState
export const Context = createContext<{ state: initialStateType, dispatch: React.Dispatch<ActionsType> }>
({state: InitialState, dispatch: ()=> null});

export const ContextProvider: FC = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, InitialState)
    useEffect(()=>{
        const user = {...state.user}
        localStorage.setItem('user', JSON.stringify(state.user))
        console.log('i work!')
    }, [state.user])
    return (
        <Context.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )
}



