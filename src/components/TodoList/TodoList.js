import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


const TodoList = ({ todo, removeTodo }) => {
    return (
        <React.Fragment>
            <ListItem button>
                <ListItemText primary={todo.name} />
                <Button color="secondary" onClick={() => removeTodo(todo.id)} > Delete</Button>
            </ListItem>
            <Divider />
        </React.Fragment>
    );
};

export default TodoList;