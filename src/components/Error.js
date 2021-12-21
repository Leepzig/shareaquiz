import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Error = () => {
    const error = useSelector(state => state.Error)

    return (
        <>
        <Typography >
            {error}
        </Typography>
        </>
    )
}

export default Error
