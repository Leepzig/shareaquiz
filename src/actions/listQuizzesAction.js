import { baseUrl } from "../GLOBALS";

export const loadQuizzes = () => {
    return async dispatch => {
        dispatch({type: "REQUESTING" });
        const resp = await fetch(baseUrl + '/quizzes', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        const data = await resp.json();
        dispatch({ type: "SET_QUIZZES", payload: data })
        dispatch({ type: "DONE_REQUESTING" })
    }
}