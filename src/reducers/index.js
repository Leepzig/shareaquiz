import { combineReducers } from "redux";

import listQuizzesReducer from "./listQuizzesReducer";
import errorsReducer from "./errorsReducer";
import newQuizReducer from "./newQuizReducer";
import sessionsReducer from "./sessionsReducer";


export default combineReducers({
    newQuiz:newQuizReducer,
    sessions:sessionsReducer,
    quizzes:listQuizzesReducer,
    errors:errorsReducer
})