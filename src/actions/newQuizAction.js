
export const createNewQuiz = (form) => {
    return async dispatch => {
        //send form to server here
        //then dispatch the returned data as the payload
        const payload = {
            id:1,
            title:form.title,
            category:form.category
        }
        dispatch({type:"NEW_QUIZ", payload})
    }
}

export const addNewQuestion = form => {
    return async dispatch => {

        //send post request with form

        const payload = {
            id:1,
            question:form.question,
            answer:form.answer
        }
        dispatch({type:"ADD_QUESTION", payload})
    }
}