import React from 'react';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form action="">
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name='confirm' required />
                    <input className='btn-submit' type="submit" value='Sign Up' />
                </div>
            </form>
        </div>
    );
};

export default SignUp;