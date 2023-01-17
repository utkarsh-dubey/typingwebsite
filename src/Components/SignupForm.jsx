import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { auth } from '../firebaseConfig';
import { useTheme } from '../Context/ThemeContext';

const SignupForm = ({handleClose}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {theme} = useTheme();
    const handleSubmit = ()=>{

        if(!email || !password || !confirmPassword){
            alert("Fill all the details");
            return;
        }

        if(password!==confirmPassword){
            alert("Password Mismatch");
            return;
        }

        // signup the user

        auth.createUserWithEmailAndPassword(email, password).then((res)=>{
            alert("user created");
            handleClose();
            console.log('user created');
        })
        .catch((err)=>{
            console.log("user not created", err);
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
            onChange = {(e)=>setEmail(e.target.value)}>

        </TextField>
        <TextField
            type='password'
            variant='outlined'
            label='Enter Password'
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
            onChange = {(e)=>setPassword(e.target.value)}>
            
        </TextField>
        <TextField
            type='password'
            variant='outlined'
            label='Enter Confirm Password'
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
            onChange = {(e)=>setConfirmPassword(e.target.value)}>
            
        </TextField>
        <Button
            variant='contained'
            size='large'
            onClick={handleSubmit}
            style={{backgroundColor:theme.title, color: theme.background}}>
            Signup
        </Button>
    </Box>
  )
}

export default SignupForm