import React from 'react'
import { auth } from '../firebaseConfig'
import AccountCircle from '@mui/icons-material/AccountCircle';

const UserCard = ({totalTests}) => {

    const user = auth.currentUser;
  return (
    <div className="user-profile">
        <div className="user">
            <div className="profile-picture">
                <AccountCircle style={{display:'block', transform: 'scale(6)', margin: 'auto', marginTop:'30px'}}/>    
            </div>   
            <div className="info">
                <div className="email">
                    {user.email}
                </div>
                <div className="joined-at">
                    {user.metadata.creationTime}
                </div>
            </div>
        </div>
        <div className="total-tests">
            Total Tests Taken - {totalTests}
        </div>
    </div>
  )
}

export default UserCard