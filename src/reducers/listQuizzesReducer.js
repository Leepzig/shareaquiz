const initialState = {
    quizzes: []
}

const listQuizzesReducer = ( state = initialState, action) => {
    switch(action.type) {
        case "SET_QUIZZES":
            return {...state, quizzes: action.payload};
        default:
            return state
    }
}

export default listQuizzesReducer;