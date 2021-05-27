function ValidateForm(errors, values) {
  const formTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
    values.email
  );

  if (!values.username.trim()) {
    errors.username = 'Username required';
  } else if (values.username.length < 4) {
    errors.username = 'Password needs to be 4 characters or more';
  } else if (values.username.length >= 4) {
    errors.username = '';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!formTest) {
    errors.email = 'Email address is invalid';
  } else if (formTest) {
    errors.email = '';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  } else if (values.password.length >= 6) {
    errors.password = '';
  }
}

export default ValidateForm;
