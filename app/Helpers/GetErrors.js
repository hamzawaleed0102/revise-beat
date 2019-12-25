export const GetSignupErrors = formData => {
  const errors = [];
  for (var i in formData) {
    if (i === 'confirmPassword') {
      if (formData.password !== formData.confirmPassword) {
        errors.push('confirmPassword');
      }
    } else if (formData[i] === '') {
      errors.push(i);
    }
  }
  return errors;
};
