import { combineReducers } from "redux";
import newQuizReducer from "./newQuizReducer";
import sessionsReducer from "./sessionsReducer";


export default combineReducers({
    newQuiz:newQuizReducer,
    sessions:sessionsReducer
})