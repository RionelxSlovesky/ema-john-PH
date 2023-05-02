import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {

    const auth = getAuth(app)
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)

    const {user, createUser} = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;

        if (password == confirmPassword) {
            createUser(email,password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
                form.reset()
                setError('')
            })
            .catch(err => {
                setError(err.message)
            })
        }else{
            setError('Password need to match ')
        }




    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name='password' required />
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name='confirm' required />
                    <p style={{cursor:'pointer'}} onClick={() => setShow(!show)}>{
                        show ? <small>Hide Password</small>:<small>Show Password</small>
                    }</p>
                    <input className='btn-submit' type="submit" value='Sign Up' />
                    <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
                    <p className='error-msg'>{error}</p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;