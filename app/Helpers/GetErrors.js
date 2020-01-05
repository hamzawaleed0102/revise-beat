import {checkEmail, checkName} from './Validations';

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
    } else if (i === 'userName') {
      // no @, no empty char
      if (
        formData.userName.indexOf('@') !== -1 ||
        formData.userName.indexOf(' ') !== -1
      ) {
        errors.push('userName');
      } else if (formData.userName.trim() === '') {
        errors.push('userName');
      }
    } else if (i === 'fullName') {
      if (!checkName(formData.fullName)) {
        errors.push('fullName');
      }
    } else if (formData[i] === '') {
      errors.push(i);
    }
  }
  return errors;
};
