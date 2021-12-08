const initalState = {
    quiz:{
        id:null,
        title:"",
        category:"",
        questions:[]
    }
}

const newQuizReducer = (state=initalState, {payload, type}) => {
    switch(type) {
        case "NEW_QUIZ":
            debugger
            return {...state, quiz:payload}
        case "ADD_QUESTION":
            // TODO refactor this to be more readable, too much spreading
            return {...state}
        default:
            return state
    }
}

export default newQuizReducer