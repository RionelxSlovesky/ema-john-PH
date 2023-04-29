import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form action="">
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                    <input className='btn-submit' type="submit" value='Login' />
                    <input className='google-signin-btn' type="submit" value='Google SignIn' />
                </div>
            </form>
        </div>
    );
};

export default Login;