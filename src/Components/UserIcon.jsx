import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Modal, Tab, Tabs, Box } from '@mui/material';
import { useTheme } from '../Context/ThemeContext';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { auth } from '../firebaseConfig';
import {useAuthState} from 'react-firebase-hooks/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const UserIcon = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const handleClose = ()=>{
        setOpen(false);
    }

    const handleValueChange = (e,v)=>{
        setValue(v);
    }   

    const handleUserIconClick = ()=>{

        if(user){
            // redirect to user page
            navigate('/user');
        }
        else{
            setOpen(true);
        }

    }

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = ()=>{

        signInWithPopup(auth, googleProvider).then((res)=>{
            alert("sign in with google successfull");
        }).catch((err)=>{
            alert("sign in with google failed");
        })

    }

    const signInWithGithub = ()=>{
        signInWithPopup(auth, githubProvider).then((res)=>{
            alert("sign in with github success");
        }).catch((err)=>{
            alert("sign in with github failed" + err);
        })
    }

    const logout = ()=>{
        auth.signOut();
    }

    const {theme} = useTheme();

  return (
    <div>
        {/* first is the icon and then we will have a modal */}
        <AccountCircleIcon onClick={handleUserIconClick}/>
        {user && <LogoutIcon onClick={logout}/>}
        <Modal 
                open={open}
                onClose={handleClose}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(2px)'

                }}
            >
                
                <div style={{width: '400px', textAlign:'center'}}>

                    <AppBar position='static' style={{backgroundColor:'transparent'}}>
                        <Tabs
                            value={value}
                            onChange={handleValueChange}
                            variant='fullWidth'
                        >
                            <Tab label='login' style={{color: theme.title}}></Tab>
                            <Tab label='signup' style={{color: theme.title}}></Tab>
                        </Tabs>
                    </AppBar>
                    {value===0 && <LoginForm handleClose={handleClose}/>}
                    {value===1 && <SignupForm handleClose={handleClose}/>}

                    <Box>
                        <span>OR</span>
                        <GoogleButton 
                            style={{
                                width: '100%',
                                marginTop: '10px'
                            }}
                            onClick={signInWithGoogle}/>
                    </Box>
                </div>

        </Modal>



    </div>
  )
}

export default UserIcon