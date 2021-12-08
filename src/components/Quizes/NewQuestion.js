import React, { useState} from 'react'
import { Button, TextField, Typography, Box } from '@mui/material';

const NewQuestion = (props) => {
    const [form, setForm] = useState({
        question:"",
        answer:""
    })

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.changeQuestion()
        setForm({input:""})
        console.log(form.input)
    }
    return (
        <div>
            <Typography>{props.children}</Typography>
            <Box component="form" onSubmit={handleSubmit}>
            <TextField
            margin="normal"
            required
            // fullWidth
            type="text"
            name="question"
            label="Question"
            id="question"
            onChange={handleChange}
            value={form.question}
            />
            <TextField
            margin="normal"
            required
            // fullWidth
            type="text"
            name="answer"
            label="Answer"
            id="answer"
            onChange={handleChange}
            value={form.answer}
            />
            <Button type="submit" variant="contained">Save</Button>
            </Box>
            
        </div>
    )
}

export default NewQuestion
