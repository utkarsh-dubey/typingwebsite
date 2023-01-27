import React from 'react'
import UserIcon from './UserIcon'
import { Modal } from '@mui/material'
import CompareBtn from './CompareBtn'

const Header = () => {

    

  return (
    <div className="header">

        <div className="logo">
            <span>
              LOGO
            </span>
            <div>
              <CompareBtn/>
            </div>
        </div>

        <div className="user-icon">
            <UserIcon/>

            

        </div>

    </div>
  )
}

export default Header