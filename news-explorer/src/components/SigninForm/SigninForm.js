import React from 'react';
import './SigninForm.css';

function SigninForm() {
    return (
        <form className="signin__form">
            <h3 className="signin__title">Sign in</h3>
            <label className='signin__label' for='signin__email'>Email</label>
            <input
                id='signin__email'
                className="signin__input signin__email-input"
                type='email' 
                placeholder="Enter email"
            />
            <label className='signin__label' for='signin__password'>Password</label>
            <input
                id='signin__password'
                className="signin__input signin__password-input"
                type='password' 
                placeholder="Enter password"
            />
            <button className="signin__button-signin">Sign in</button>
            <button className="signin__button-signup">or <span className='signin__span'>Sign up</span></button>
        </form>
    )
}

export default SigninForm;
