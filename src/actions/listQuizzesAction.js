import { baseUrl } from "../GLOBALS";

export const loadQuizzes = () => {
    return async dispatch => {
        const resp = await fetch(baseUrl + '/quizzes', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `bearer: ${localStorage.getItem("jwt")}`
            }
        })
        const data = await resp.json();
        dispatch({ type: "SET_QUIZZES", payload: data })
    }
}