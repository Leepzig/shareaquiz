import { List, ListItem } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Error = () => {
    const errors = useSelector(state => state.errors.errors)

    return (
        <>
        <List>
                {errors.map((message) => <ListItem style={{color:'red'}} key={message}>{message}</ListItem>)}
        </List>
        </>
    )
}

export default Error
