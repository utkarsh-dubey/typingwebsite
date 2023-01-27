import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { auth, db } from '../firebaseConfig';
import { useTheme } from '../Context/ThemeContext';
import { toast } from 'react-toastify';

const SignupForm = ({handleClose}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {theme} = useTheme();

    const checkUsernameAvailability = async()=>{
        const ref = db.collection('usernames');
        const response = await ref.doc(username).get();
        return !response.exists;
    }


    const handleSubmit = async()=>{
        if(!email || !password || !confirmPassword || !username){
            toast('Fill all the details', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return;
        }

        if(password!==confirmPassword){
            toast('Password mismatch', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return;
        }

        // signup the user

        if(await checkUsernameAvailability()){
            auth.createUserWithEmailAndPassword(email, password).then(async(res)=>{

                const ref = await db.collection('usernames').doc(username).set({
                    uid: res.user.uid
                });
                toast('User Created', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                handleClose();
            })
            .catch((err)=>{
                toast('Not able to create user, try again later', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            })
        }
        else{
            toast('Username taken, choose some other username', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }

        



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
            type='text'
            variant='outlined'
            label='Enter Username'
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
            onChange = {(e)=>setUsername(e.target.value)}>

        </TextField>

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