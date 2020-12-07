import React, { useState } from 'react'
import "./Loginpage.css"
import {Link} from "react-router-dom";
function Loginpage() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const signIn = e =>{
        e.preventDefault();
        // fancy firbase tings
    }
    const register = e =>{
        e.preventDefault();
        // fancy firbase tings
    }
    return (
        <div className='login'>
            <Link to="/">            
            <img className="login__logo"
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                <h5>Email</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <button type='submit' onClick={signIn} className="login__signinButton">Sign In</button>

                </form> 
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE
                    Conditions of Use & Sale. Please see our
                    Privacy Notice, out Cookies Notice and our 
                    Interest-Based Ads
                </p>
                <button onClick={register} className="login__registerButton">Create Your Amazon Account </button>
            </div>        
        </div>
    )
}

export default Loginpage
