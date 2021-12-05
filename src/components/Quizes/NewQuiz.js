import { List, ListItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import NewQuestion from './NewQuestion'

const NewQuiz = () => {
    const [question, setQuestion] = useState(false)
    const [questions, setQuestions] = useState([])

    const changeQuestion = () => {
        setQuestion(!question)
    }

    const addQuestion = (input) => {
        
    }



    return (
        <div>
            {question ? <NewQuestion changeQuestion={changeQuestion}>Answer:</NewQuestion> :<NewQuestion changeQuestion={changeQuestion} >Question:</NewQuestion>}
            <Typography variant="h3">Current Questions:</Typography>
            <List>
                {questions.map(question => <ListItem >{question.question}</ListItem>)}
            </List>
        </div>
    )
}

export default NewQuiz
