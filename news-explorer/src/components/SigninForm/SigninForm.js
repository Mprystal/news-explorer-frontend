import React from 'react';
import './SigninForm.css';

function SigninForm({handleFormSwitchClick, handleLoginSubmit, handleFormChange, values,isValid,errors,resetForm}) {
   
    return (
        <form className="signin__form" onSubmit={handleLoginSubmit} noValidate action='#' onReset={resetForm}>
            <h3 className="signin__title">Sign in</h3>
            <label className='signin__label' htmlFor='signin__email'>Email</label>
            <input
                id='signin__email'
                className="signin__input signin__email-input"
                type='email'
                name='email' 
                placeholder="Enter email"
                value={values.email}
                onChange={handleFormChange}
                required
            />
            {values.email === '' ? null : <span>{errors.email}</span>}
            <label className='signin__label' htmlFor='signin__password'>Password</label>
            <input
                id='signin__password'
                className="signin__input signin__password-input"
                type='password' 
                name='password'
                placeholder="Enter password"
                value={values.password}
                onChange={handleFormChange}
                required
            />
            {values.password === '' ? null : <span>{errors.password}</span>}
            <button className={isValid ? 'signin__button-signin' : 'signin__button-signin_disabled'}
            disabled={!isValid} 
            type='submit'>
                Sign in
            </button>
            <button className="signin__button-signup"  onClick={handleFormSwitchClick}>
                or <span className='signin__span'>Sign up</span>
            </button>
        </form>
    )
}

export default SigninForm;
