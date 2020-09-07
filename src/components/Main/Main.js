import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TodoList from '../TodoList/TodoList';
import List from '@material-ui/core/List';

const Main = () => {
    const [todoValue, setTodoValue] = useState('');
    const [totalTodo, setTotalTodo] = useState([]);

    useEffect(() => {
        localStorage.getItem('todo') && setTotalTodo(JSON.parse(localStorage.getItem('todo')));
    }, [])

    const handleAddTodo = () => {
        if (todoValue.length > 0) {
            const singleTodo = {
                id: new Date().toLocaleTimeString() + Math.random(),
                name: todoValue
            }
            const newTodo = [...totalTodo, singleTodo];
            setTotalTodo(newTodo);
            localStorage.setItem('todo', JSON.stringify(newTodo));
            setTodoValue('');
        } else {
            alert('Please enter something!!!');
        }
    }

    const removeTodo = (id) =>{
       const remainingItem = totalTodo.filter(item => item.id !== id);
        setTotalTodo([...remainingItem]);
        localStorage.setItem('todo', JSON.stringify(remainingItem));   
   }

    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                    <Box ml={5} mr={5} p={4} display="flex">
                        <Box flexGrow={1}>
                            <TextField id="textBox" style={{ width: '100%' }} value={todoValue} onChange={(e) => setTodoValue(e.target.value)} label="write your todo" /></Box>
                        <Box flexShrink={0}>
                            <Button variant="contained" color="primary" onClick={() => handleAddTodo()}>Add
                            </Button>
                        </Box>
                    </Box>
                    <Box ml={5} mr={5}>
                        <List component="nav">
                            {
                                totalTodo.map(item => <TodoList key={item.id} todo={item} removeTodo={removeTodo} />)
                            }
                        </List>
                    </Box>
                </Typography>
            </Container>
        </React.Fragment>
    );
};

export default Main;