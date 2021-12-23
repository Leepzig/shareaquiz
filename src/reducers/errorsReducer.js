const initialState = {
    errors:null
}

const errorsReducer = (state=initialState, {type, payload}) => {
    switch(type) {
        case "SET_ERRORS":
            return {errors:payload}
        case "CLEAR_ERRORS":
            return state
        default:
            return state
    }
}

export default errorsReducer