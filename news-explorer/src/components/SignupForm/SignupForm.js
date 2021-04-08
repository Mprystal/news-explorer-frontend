import React from 'react';
import './SignupForm.css';

function SignupForm({
  handleFormSwitchClick,
  handleFormChange,
  values,
  isValid,
  errors,
  resetForm,
  handleSignupSubmit,
}) {
  return (
    <form
      className='signup__form'
      onSubmit={handleSignupSubmit}
      onReset={resetForm}
      noValidate
      action='#'
    >
      <h3 className='signup__title'>Sign up</h3>
      <label className='signup__label' htmlFor='signup__email'>
        Email
      </label>

      <input
        id='signup__email'
        className='signup__input signup__email-input'
        type='email'
        placeholder='Enter email'
        name='email'
        value={values.email}
        onChange={handleFormChange}
        required
      />

      <span className='signup__input-error'>{errors.email}</span>

      <label className='signup__label' htmlFor='signup__password'>
        Password
      </label>

      <input
        id='signup__password'
        className='signup__input signup__password-input'
        type='password'
        placeholder='Enter password'
        minLength={6}
        name='password'
        value={values.password}
        onChange={handleFormChange}
        required
      />

      <span className='signup__input-error'>{errors.password}</span>

      <label className='signup__label' htmlFor='signup__username'>
        Username
      </label>

      <input
        id='signup__username'
        className='signup__input signup__username-input'
        type='text'
        placeholder='Enter your username'
        name='username'
        value={values.username}
        onChange={handleFormChange}
        required
        minLength={4}
      />

      <span className='signup__input-error'>{errors.username}</span>

      <button
        className={
          isValid ? 'signup__button-signup' : 'signup__button-signup_disabled'
        }
        disabled={!isValid}
        type='submit'
      >
        Sign up
      </button>
      <button
        className='signup__button-signin'
        onClick={handleFormSwitchClick}
        type='button'
      >
        or <span className='signup__span'>Sign in</span>
      </button>
    </form>
  );
}

export default SignupForm;
