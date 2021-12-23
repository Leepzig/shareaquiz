
export const setError = (errorMessage) => {
    return dispatch => {
        debugger
        dispatch({type:"SET_ERRORS", payload:errorMessage})
    }
}

export const clearErrors = () => {
    return dispatch => {
        dispatch({type:"CLEAR_ERRORS"})
    }
}