import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import newQuizReducer from "./newQuizReducer";
import sessionsReducer from "./sessionsReducer";


export default combineReducers({
    newQuiz:newQuizReducer,
    sessions:sessionsReducer,
    errors:errorsReducer
})