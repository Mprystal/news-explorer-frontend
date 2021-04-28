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
  sameUserError,
}) {
  return (
    <form
      className='signup-form'
      onSubmit={handleSignupSubmit}
      onReset={resetForm}
      noValidate
      action='#'
    >
      <h3 className='signup-form__title'>
        Sign up
        <span className='signup-form__input-error'>
          {sameUserError && 'Email is already taken'}
        </span>
      </h3>
      <label className='signup-form__label' htmlFor='signup-form__email'>
        Email
      </label>

      <input
        id='signup-form__email'
        className='signup-form__input signup-form__email-input'
        type='email'
        placeholder='Enter email'
        name='email'
        value={values.email}
        onChange={handleFormChange}
        required
      />

      <span className='signup-form__input-error'>{errors.email}</span>

      <label className='signup-form__label' htmlFor='signup-form__password'>
        Password
      </label>

      <input
        id='signup-form__password'
        className='signup-form__input signup-form__password-input'
        type='password'
        placeholder='Enter password'
        minLength={6}
        name='password'
        value={values.password}
        onChange={handleFormChange}
        required
      />

      <span className='signup-form__input-error'>{errors.password}</span>

      <label className='signup-form__label' htmlFor='signup-form__username'>
        Username
      </label>

      <input
        id='signup-form__username'
        className='signup-form__input signup-form__username-input'
        type='text'
        placeholder='Enter your username'
        name='username'
        value={values.username}
        onChange={handleFormChange}
        required
        minLength={4}
      />

      <span className='signup-form__input-error'>{errors.username}</span>

      <button
        className={
          isValid
            ? 'signup-form__button-signup'
            : 'signup-form__button-signup_disabled'
        }
        disabled={!isValid}
        type='submit'
      >
        Sign up
      </button>
      <button
        className='signup-form__button-signin'
        onClick={handleFormSwitchClick}
        type='button'
      >
        or <span className='signup-form__span'>Sign in</span>
      </button>
    </form>
  );
}

export default SignupForm;
