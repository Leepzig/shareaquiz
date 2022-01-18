import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadQuizzes } from '../../actions/listQuizzesAction';

const ListQuizzes = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadQuizzes())
    }, [])

    const quizzes = useSelector(state => state.quizzes.quizzes)
    
    return (
        <div>
            {quizzes.map(quiz => <h2>{quiz.title}</h2>)}
        </div>
    )
}

export default ListQuizzes
