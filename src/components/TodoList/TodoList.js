import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete'; 


const TodoList = ({ todo, removeTodo }) => {
    return (
        <React.Fragment>
            <ListItem button>
                <ListItemText primary={todo.name} />
                <DeleteIcon color="secondary" onClick={() => removeTodo(todo.id)}/>
            </ListItem>
            <Divider />
        </React.Fragment>
    );
};

export default TodoList;