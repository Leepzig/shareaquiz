import { TextField, List, ListItem, Typography, Button, Box } from '@mui/material'
import React, { useState } from 'react'
import NewQuestion from './Questions/NewQuestion'
import { useDispatch, useSelector } from 'react-redux'
import { createNewQuiz } from '../../actions/newQuizAction'
import { useNavigate } from 'react-router'
import QuestionLineItem from './Questions/QuestionLineItem'

const NewQuiz = () => {
    const [newQuiz, setNewQuiz] = useState({title:"", category:""})

    const dispatch = useDispatch()
    const quiz = useSelector(state => state.newQuiz)
    const user = useSelector(state => state.sessions.user)
    const navigate = useNavigate()

    const handleChange = e => {
        setNewQuiz({
            ...newQuiz,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        //why does form use this format ?
        //const data = new FormData(e.currentTarget)
        console.log(newQuiz)
        dispatch(createNewQuiz(newQuiz, user.id))
    }

    const submitQuiz = () => {
        //TODO: Change this to view all created quizes, probably a recent created quizes, or the same user created quizes section
        navigate("/home")
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
    

    if (quiz.id) {
        return (
        <>
            <Typography variant='h4'>{quiz.title}</Typography>
            <NewQuestion />
            <Typography variant="h4">Current Questions:</Typography>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>

            <List>
                {/* TODO: Make a component to map over to add edit and delete buttons out to the side */}
                {quiz.questions.map(question => <QuestionLineItem key={question.id}>{question.question}</QuestionLineItem>)}
            </List>
            <Button onClick={submitQuiz}>Confirm Quiz</Button>
            {/* TODO: is this the best place for this button? */}
            </Box>
        </>
    )} else {
        return (
            <>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                <TextField
                margin="normal"
                required
                // fullWidth
                autoFocus
                type="text"
                name="title"
                label="Title"
                id="title"
                onChange={handleChange}
                value={newQuiz.title}
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
                value={newQuiz.category}
                />
                <Button type="submit" variant="contained">Create Quiz</Button>
            </Box>
            </>
        )
    }
}

export default NewQuiz
