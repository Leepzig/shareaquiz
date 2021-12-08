import { TextField, List, ListItem, Typography, Button, Box } from '@mui/material'
import React, { useState } from 'react'
import NewQuestion from './NewQuestion'

const NewQuiz = () => {
    const [question, setQuestion] = useState(false)
    const [questions, setQuestions] = useState([])
    const [quiz, setQuiz] = useState({titile:"", category:""})

    const changeQuestion = () => {
        setQuestion(!question)
    }

    const addQuestion = (input) => {

    }

    const handleChange = e => {
        setQuiz({
            ...quiz,
            [e.target.name]:e.target.target
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(quiz)
    }
    //user clicks new quiz on navbar : Works
    //input for title and category
    //user clicks button to submit
    //send request to create new quiz
    //saves the new quiz id on the front end to send future requests for the questions
    //create a question and answer
    //user clicks save button
    //button for next question that saves the question
    //saves question -> sends it to back end with quiz id
    //uses the quiz id to create question on the backend
    //sends question back and adds it to Current Questions Category:
    //repeat create question and answer input
    
    //Redux
    //NewQuizReducer
    //  Quiz:{id:1, category:"Animals", title:"Hungry Animals", questions:[{id:1, question:"?", answer:""}]}
    //Actions, new quiz, add question, load quiz (for editing), edit question, delete, 


    return (
        <div>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <TextField
            margin="normal"
            required
            // fullWidth
            type="text"
            name="title"
            label="Title"
            id="title"
            onChange={handleChange}
            value={quiz.title}
            />
            <TextField
            margin="normal"
            required
            // fullWidth
            type="text"
            name="category"
            label="Category"
            id="category"
            onChange={handleChange}
            value={quiz.category}
            />
            <Button type="submit" >Make Questions</Button>
            </Box>
            <NewQuestion changeQuestion={changeQuestion}/>
            <Typography variant="h3">Current Questions:</Typography>
            <List>
                {questions.map(question => <ListItem >{question.question}</ListItem>)}
            </List>
        </div>
    )
}

export default NewQuiz
