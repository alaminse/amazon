import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        // some fancy firebase login
    }
    const register = e => {
        e.preventDefault();

        // some fancy firebase register
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src="https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}
                    className='login__signInButton'>Sign In</button>
                </form>
                <p>By signing-in you agree to the AMAZON CLONE Condition of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Base ads notice. </p>

                <button onClick={register} className='login__registerButton'>Create  your amazon Account</button>
            </div>
        </div>
    )
}

export default Login
