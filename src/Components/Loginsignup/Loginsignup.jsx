import React from 'react'
import './Loginsignup.css';
import email from '../Assets/email.png';
import password from '../Assets/password.png';
import person from '../Assets/person.png'

const Loginsignup = () => {
  return (
    <div className='container'>
     <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
     </div>
     <div className="inputs">
        <div className="input">
            <img src={person} alt="" />
            <input type="text" />
        </div>
        <div className="input">
            <img src={email} alt="" />
            <input type="email" />
        </div>
        <div className="input">
            <img src={password} alt="" />
            <input type="password" />
        </div>
     </div>
     <div className="forgot-password">Lost Password? <span>Click Here..</span></div>
     <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
     </div>
    </div>
  )
}

export default Loginsignup