import { TextField, List, ListItem, Typography, Button, Box } from '@mui/material'
import React, { useState } from 'react'
import NewQuestion from './NewQuestion'
import { useDispatch, useSelector } from 'react-redux'
import { createNewQuiz } from '../../actions/newQuizAction'

const NewQuiz = () => {
    const [newQuiz, setNewQuiz] = useState({title:"", category:""})

    const dispatch = useDispatch()
    const quiz = useSelector(state => state.newQuizReducer)
    const addQuestion = (input) => {

    }

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
        dispatch(createNewQuiz(newQuiz))
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
            <List>
                {/* TODO: Make a component to map over to add edit and delete buttons out to the side */}
                {quiz.questions.map(question => <ListItem key={question.id}>{question.question}</ListItem>)}
            </List>
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
            <Button type="submit" >Make Questions</Button>
            </Box>
            </>
        )
    }
    // return (
    //     <div>
    //         {quiz.id ? <Typography variant='h4'>{quiz.title}</Typography>
    //          :<Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
    //         <TextField
    //         margin="normal"
    //         required
    //         // fullWidth
    //         type="text"
    //         name="title"
    //         label="Title"
    //         id="title"
    //         onChange={handleChange}
    //         value={newQuiz.title}
    //         />
    //         <TextField
    //         margin="normal"
    //         required
    //         // fullWidth
    //         type="text"
    //         name="category"
    //         label="Category"
    //         id="category"
    //         onChange={handleChange}
    //         value={newQuiz.category}
    //         />
    //         <Button type="submit" >Make Questions</Button>
    //         </Box> }
    //         <NewQuestion />
    //         <Typography variant="h4">Current Questions:</Typography>
    //         <List>
    //             {/* TODO: Make a component to map over to add edit and delete buttons out to the side */}
    //             {questions.map(question => <ListItem >{question.question}</ListItem>)}
    //         </List>
    //     </div>
    // )
}

export default NewQuiz
