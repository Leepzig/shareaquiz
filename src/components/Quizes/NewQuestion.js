import React, { useState} from 'react'
import { Button, Input, Typography } from '@mui/material';

const NewQuestion = (props) => {
    const [form, setForm] = useState({
        input:""
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
            <form onSubmit={handleSubmit}>
            <Input 
            value={form.input}
            name="input"
            onChange={handleChange}

            />
            <Button type="submit" variant="contained">Save</Button>
            </form>
            
        </div>
    )
}

export default NewQuestion
