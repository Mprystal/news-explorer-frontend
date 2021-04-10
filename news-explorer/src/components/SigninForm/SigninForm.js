import React from 'react';
import './SigninForm.css';

function SigninForm({
  handleFormSwitchClick,
  handleLoginSubmit,
  handleFormChange,
  values,
  isValid,
  errors,
  resetForm,
}) {
  return (
    <form
      className='signin-form'
      onSubmit={handleLoginSubmit}
      noValidate
      action='#'
      onReset={resetForm}
    >
      <h3 className='signin-form__title'>Sign in</h3>
      <label className='signin-form__label' htmlFor='signin-form__email'>
        Email
      </label>
      <input
        id='signin-form__email'
        className='signin-form__input signin-form__email-input'
        type='email'
        name='email'
        placeholder='Enter email'
        value={values.email}
        onChange={handleFormChange}
        required
      />

      <span className='signin-form__input-error'>{errors.email}</span>

      <label className='signin-form__label' htmlFor='signin-form__password'>
        Password
      </label>
      <input
        id='signin-form__password'
        className='signin-form__input signin-form__password-input'
        type='password'
        name='password'
        placeholder='Enter password'
        value={values.password}
        onChange={handleFormChange}
        minLength={6}
        required
      />

      <span className='signin-form__input-error'>{errors.password}</span>

      <button
        className={
          isValid
            ? 'signin-form__button-signin'
            : 'signin-form__button-signin_disabled'
        }
        disabled={!isValid}
        type='submit'
      >
        Sign in
      </button>
      <button
        className='signin-form__button-signup'
        onClick={handleFormSwitchClick}
      >
        or <span className='signin-form__span'>Sign up</span>
      </button>
    </form>
  );
}

export default SigninForm;
