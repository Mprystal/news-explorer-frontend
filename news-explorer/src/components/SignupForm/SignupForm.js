import React from 'react';
import './SignupForm.css';

function SignupForm({handleFormSwitchClick}) {
    return (
        <form className="signup__form" >
            <h3 className="signup__title">Sign up</h3>
            <label className='signup__label' htmlFor='signup__email'>Email</label>
            <input
                id='signup__email'
                className="signup__input signup__email-input"
                type='email' 
                placeholder="Enter email"
                required
            />
            <label className='signup__label' htmlFor='signup__password'>Password</label>
            <input
                id='signup__password'
                className="signup__input signup__password-input"
                type='password' 
                placeholder="Enter password"
                required
            />
            <label className='signup__label' htmlFor='signup__username'>Username</label>
            <input
                id='signup__username'
                className="signup__input signup__username-input"
                type='text' 
                placeholder="Enter your username"
                required
            />
            <button className="signup__button-signup">Sign up</button>
            <button className="signup__button-signin" onClick={handleFormSwitchClick}>
                or <span className='signup__span'>Sign in</span>
            </button>
        </form>
    )
}

export default SignupForm
