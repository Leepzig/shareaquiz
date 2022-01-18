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
            const {id, username, email, date_of_birth, quizzes } = payload

            //TODO check variablename for dateOfBirth
            return {...state, user:{id, username, email, dateOfBirth:date_of_birth, quizzes}, loggedIn:true}
        case "LOGOUT":
            //TODO check that this is returning user to blank and loggedIn to false
            debugger
            return initialState
        case "NEW_USER":
            //TODO should there be a separate login for when a user creates an account? What would be different?
            //TODO Change log in status and handle JWT
            return {...state, user:{id:payload.id, username:payload.username, email:payload.email, dateOfBirth:payload.date_of_birth, quizzes:payload.quizzes} }
        default:
            return state
    }
}

export default sessionsReducer