
import { baseURL } from "../GLOBALS"

export const createNewQuiz = (form, id) => {
    return async dispatch => {
        //send form to server here
        //then dispatch the returned data as the payload
        const options = {
            method:'POST',
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem('jwt')}`
            },
            body:JSON.stringify(form)
        }
        const response = await fetch(`${baseURL}/${id}/quizzes`, options)
        const data = await response.json()
        dispatch({type:"NEW_QUIZ", data})
    }
}

export const addNewQuestion = (form, quizId) => {
    return async dispatch => {

        //send post request with form
        const options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"applicaiton/json",
                "Authorization":`Bearer ${localStorage.getItem('jwt')}`
            }, 
            body:JSON.stringify(form)
        }
        const response = await fetch(`${baseURL}/${quizId}/questions`)
        const data = await response.json()
        const payload = {
            id:1,
            question:form.question,
            answer:form.answer
        }
        dispatch({type:"ADD_QUESTION", data})
    }
}