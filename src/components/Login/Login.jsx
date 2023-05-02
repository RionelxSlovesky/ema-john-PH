import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

    const [error,setError] = useState('')
    const {signIn} = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    
    const from = location.state?.from?.pathname || '/';
    console.log(from)
    console.log(location)

    const handleLogIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        
        signIn(email,password)
        .then(res => {
            const loggedUser = res.user;
            console.log(loggedUser)
            setError('')
            navigate(from)
        })
        .catch(err => {
            setError(err.message)
        })


    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogIn}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                    <input className='btn-submit' type="submit" value='Login' />
                    <p><small>New to Ema-John? <Link to='/signup'>Sign Up</Link></small></p>
                    <input className='google-signin-btn' type="submit" value='Google SignIn' />
                    <p className='error-msg'>{error}</p>
                </div>
            </form>
        </div>
    );
};

export default Login;