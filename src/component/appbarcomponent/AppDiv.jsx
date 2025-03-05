import React from 'react'
import Logo from '../../assets/Bicpl_logo.ico'
import './AppbarStyle.css'
const AppDiv = () => {
  return (
    <div className='appbarheading'>

       <a href="" target="_blank">
            <img src={Logo} className="logo" alt="Bicpl logo" />
       </a>

      <h1 className='appbarhead'>Employee Self Service</h1>
    </div>
  )
}

export default AppDiv
