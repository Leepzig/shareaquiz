const initalState = {
    // quiz:{
        id:null,
        title:"",
        category:"",
        questions:[]
    // }
}

const newQuizReducer = (state=initalState, {type, payload}) => {
    switch(type) {
        case "NEW_QUIZ":
            const {id, title, category} = payload
            return {...state, id, title, category}
        case "ADD_QUESTION":
            // TODO refactor this to be more readable, too much spreading

            return {...state, questions:[...state.questions, payload]}
        default:
            return state
    }
}

export default newQuizReducer