import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Error = () => {
    const error = useSelector(state => state.errors.errors)

    return (
        <>
        <Typography style={{color:'red'}}>
            {error}
        </Typography>
        </>
    )
}

export default Error
