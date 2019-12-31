import {checkEmail} from './Validations';

export const GetSignupErrors = formData => {
  const errors = [];
  for (var i in formData) {
    console.log('i', i);
    if (i === 'confirmPassword') {
      if (formData.password !== formData.confirmPassword) {
        errors.push('confirmPassword');
      }
    } else if (i === 'email') {
      if (!checkEmail(formData.email)) {
        errors.push('email');
      }
    } else if (formData[i] === '') {
      errors.push(i);
    }
  }
  return errors;
};
