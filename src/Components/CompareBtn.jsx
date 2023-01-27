import { Button, Modal, TextField } from '@mui/material'
import React from 'react'
import { useTheme } from '../Context/ThemeContext'
import { useState } from 'react';
import { db } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CompareBtn = () => {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const handleClose = ()=>{
        setOpen(false);
    }

    const navigate = useNavigate();

    const checkUsernameAvailability = async()=>{
        const res = await db.collection('usernames').doc(username).get();
        return res.exists;
    }

    const handleCompare = async()=>{
        if(await checkUsernameAvailability()){
            navigate(`/compare/${username}`);
        }
        else{
            toast('Invalid username', {
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

    const {theme} = useTheme();

  return (
    <div>
        <div className="compare-btn" onClick={()=>setOpen(true)}>
            COMPARE
        </div>

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
            <div
            style={{width: 'auto', textAlign:'center'}}>
                <TextField
                    type='text'
                    variant='outlined'
                    label='Enter Username'     
                    onChange={(e)=>setUsername(e.target.value)}               
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
                    
                <Button
                    style={{background:theme.title, color: theme.background, marginLeft:'5px', marginTop:'10px'}}
                    onClick={handleCompare}
                    >
                    Compare
                </Button>

            </div>


        </Modal>

    </div>
  )
}

export default CompareBtn