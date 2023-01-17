import React from 'react'
import Select from 'react-select'
import { themeOptions } from '../Utils/theme'
import { useTheme } from '../Context/ThemeContext'

const Footer = () => {

    const {setTheme} = useTheme();
    const handleThemeChange = (e)=>{
        console.log(e.value);
        setTheme(e.value);
        localStorage.setItem('theme', JSON.stringify(e.value));
    }

  return (
    <div className="footer">
        <div className="links">
            Links
        </div>
        <div className="themes">
            <Select
                options={themeOptions}
                onChange={handleThemeChange}
                menuPlacement='top'
            />
        </div>
    </div>
  )
}

export default Footer