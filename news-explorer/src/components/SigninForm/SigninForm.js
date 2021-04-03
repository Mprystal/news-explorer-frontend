import React from 'react';
import './SigninForm.css';

function SigninForm({handleFormSwitchClick, handleLoginSubmit}) {
    
    return (
        <form className="signin__form" onSubmit={handleLoginSubmit}>
            <h3 className="signin__title">Sign in</h3>
            <label className='signin__label' htmlFor='signin__email'>Email</label>
            <input
                id='signin__email'
                className="signin__input signin__email-input"
                type='email' 
                placeholder="Enter email"
                // required
            />
            <span></span>
            <label className='signin__label' htmlFor='signin__password'>Password</label>
            <input
                id='signin__password'
                className="signin__input signin__password-input"
                type='password' 
                placeholder="Enter password"
                // required
            />
            <button className="signin__button-signin" type='submit'>Sign in</button>
            <button className="signin__button-signup" onClick={handleFormSwitchClick}>
                or <span className='signin__span'>Sign up</span>
            </button>
        </form>
    )
}

export default SigninForm;
