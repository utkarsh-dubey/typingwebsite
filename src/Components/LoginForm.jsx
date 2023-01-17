import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { auth } from '../firebaseConfig';
import { useTheme } from '../Context/ThemeContext';

const LoginForm = ({handleClose}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {theme} = useTheme();
    const handleSubmit = ()=>{
        if(!email || !password){
            alert("Fill all the details");
            return;
        }

        //login user here
        auth.signInWithEmailAndPassword(email,password).then((res)=>{
            alert("user logged in");
            handleClose();
        })
        .catch((err)=>{
            console.log("not able to login", err);
        })

    }

  return (
    <Box
        p={2.5}
        style={{
            display:'flex',
            flexDirection: 'column',
            gap: '15px'
        }}>
        <TextField
            type='email'
            variant='outlined'
            label='Enter Email'
            onChange={(e)=>setEmail(e.target.value)}
            InputLabelProps={
                {
                    style: {
                        color: theme.title
                    }
                }
            }
            InputProps={{
                style: {
                    color: theme.title
                }
            }}
            >

        </TextField>
        <TextField
            type='password'
            variant='outlined'
            label='Enter Password'
            onChange={(e)=>setPassword(e.target.value)}
            InputLabelProps={
                {
                    style: {
                        color: theme.title
                    }
                }
            }
            InputProps={{
                style: {
                    color: theme.title
                }
            }}>
            
        </TextField>
        <Button
            variant='contained'
            size='large'
            onClick={handleSubmit}
            style={{backgroundColor:theme.title, color: theme.background}}>
            Login
        </Button>
    </Box>
  )
}

export default LoginForm