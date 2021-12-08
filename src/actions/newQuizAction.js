
export const newQuiz = (form) => {
    return async dispatch => {
        //send form to server here
        //then dispatch the returned data as the payload
        dispatch({type:"NEW_QUIZ", payload:form})
    }
}