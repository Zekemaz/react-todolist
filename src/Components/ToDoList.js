/**
 * Import React
 * Import elements from materiel ui
 * Create List - ListItem - ListItemText - 
 * ListItemSecondaryAction - ListIcon - DeleteIcon - Checkbox
 * 
 * Create ToDoList component with two props
    * todos: The array of todos. We map over each one and create a list item.
    * deleteTodo: Clicking a todo’s IconButton fires this function. 
    * It passes the index, which will uniquely identify a todo in our list.
    * Import this component in your App.js.
 * 
 * 
 */

import React from 'react';
import {List, ListItem, ListItemText, 
    ListItemSecondaryAction, IconButton, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'


const ToDoList = ({ todos, deleteTodo }) => {




    return(
        <List className="list">
            {todos.map((todo, index) => (
                <ListItem className="listItem" key={index.toString()} dense>
                <Checkbox className="checkbox" tabIndex={-1} disableRipple color='secondary' />
                <ListItemText className="listItemText" primary={todo} />
                <ListItemSecondaryAction>
                    <IconButton onClick={() => {deleteTodo(index)}}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            ))}
        </List>
    )
}

export default ToDoList