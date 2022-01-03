const initialState = {
    errors:[]
}

const errorsReducer = (state=initialState, {type, payload}) => {
    switch(type) {
        case "SET_ERRORS":
            return {errors:payload}
        case "CLEAR_ERRORS":
            return {errors:[]}
        default:
            return state
    }
}

export default errorsReducer