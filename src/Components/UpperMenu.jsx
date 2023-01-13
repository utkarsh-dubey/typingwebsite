import React from 'react'
import { useTestMode } from '../Context/TestModeContext'

const UpperMenu = ({countDown}) => {

    const {setTestTime} = useTestMode();

    const updateTime = (e)=>{
        setTestTime(Number(e.target.id));
    }


  return (
    <div className="upper-menu">
        <div className="countdown">
            {countDown}
        </div>
        <div className="modes">
            <div className="mode" id={15} onClick={updateTime}>15s</div>
            <div className="mode" id={30} onClick={updateTime}>30s</div>
            <div className="mode" id={60} onClick={updateTime}>60s</div>
        </div>
    </div>
  )
}

export default UpperMenu