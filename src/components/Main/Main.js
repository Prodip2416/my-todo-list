import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Main = () => {
    const [item, setItem] = useState('');

    const handleAdd = () => {
        localStorage.setItem(Math.random(), item);
    }
    const handleChange = (e) => {
        setItem(e.target.value);
    }

    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                    <Box p={4}>
                        <TextField id="textBox" onChange={handleChange} label="write your todo" />
                        <Button variant="contained" color="primary" onClick={() => handleAdd()}>Add</Button>
                    </Box>
                </Typography>
            </Container>
        </React.Fragment>
    );
};

export default Main;