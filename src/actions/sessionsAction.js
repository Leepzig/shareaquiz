
import { baseURL } from "../GLOBALS";

export const login = (details) => {
    return async dispatch => {
        //send server request
        const options = {
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(details)
        }
        //Test to see if decontruction worked
        //TODO set up error handling
        const response = await fetch(`${baseURL}/login`, options)
        const data = await response.json()
        debugger
        localStorage.setItem("jwt", data.jwt)
        dispatch({type:"LOGIN", payload:data.user})
    }
}

export const newUser = details => {
    return async dispatch => {
        const options = {
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(details)
        }
        const response = await fetch(`${baseURL}/signup`, options)
        const data = await response.json()
        localStorage.setItem("jwt", data.jwt)
        dispatch({type:"LOGIN", payload:data.user})
    }
}

export const currentUser = () => {
    return async dispatch => {
        const options = {
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem('jwt')}`
            }
        }
        const response = await fetch(`${baseURL}/get-current-user`, options)
        const data = await response.json()
        dispatch({type:"LOGIN", payload: data.user})
    }
}

export const logout = () => {
    return async dispatch => {
        dispatch({type:"LOGOUT"})
        localStorage.clear()
    }
}