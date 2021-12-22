import {InitialState, initialStateType} from "./Context";
import {ActionsType} from "./Actions";

export const Reducer = (state: initialStateType = InitialState, action: ActionsType):initialStateType => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.user ,
                isFetching: false,
                error: false
            }
        case "LOGIN_ERROR":
            return {
                user: null,
                isFetching: false,
                error: true
            }
        case "LOGOUT":
            return{
                ...state,
                user: null
            }
        case "UPDATE_START":
            return {
               ...state,
                isFetching: true
            }
        case "UPDATE_SUCCESS":
            return {
                user: action.user ,
                isFetching: false,
                error: false
            }
        case "UPDATE_ERROR":
            return {
                user: state.user,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}
