import React from 'react'
import { IconButton, ListItem, Paper, Grid } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

const Item = styled(ListItem)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const QuestionLineItem = (props) => {
    return (
        <Paper elevation={2} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <ListItem >
                <Grid item xs={8}>
                <Item>{props.children}</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                <IconButton>
                    <EditIcon />
                </IconButton>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
                </Item>
                </Grid>
            </ListItem>
            </Grid>
        </Paper>
    )
}

export default QuestionLineItem
