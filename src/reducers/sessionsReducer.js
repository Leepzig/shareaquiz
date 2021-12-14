const initialState = {
    user:{
        id:null,
        username:"",
        email:"",
        dateOfBirth:"",
        quizzes:[]
    },
    loggedIn:false
}

const sessionsReducer = (state=initialState, {type, payload}) => {
    switch(type) {
        case "LOGIN":
            //TODO check variablename for dateOfBirth
            const {id, username, email, date_of_birth, quizzes } = payload
            return {...state, user:{id, username, email, dateOfBirth:date_of_birth, quizzes}, loggedIn:true}
        case "LOGOUT":
            //TODO check that this is returning user to blank and loggedIn to false
            return {initialState}
        case "NEW_USER":
            //TODO should there be a separate login for when a user creates an account? What would be different?
            return {...state, payload}
        default:
            return state
    }
}

export default sessionsReducer