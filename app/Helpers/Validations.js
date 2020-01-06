const phoneFormat = /^\(?([03]{2})\)?([0-9]{9})$/;
const phoneLandlineFormat = /^\(?([0]{1})\)?([0-9]{10})$/;
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const nameFormat = /^[a-zA-Z\s]+$/;
const nameFormatAlphaNumeric = /^[a-zA-Z0-9\s]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const checkPhoneNumber = phoneNumber => {
  return phoneFormat.test(phoneNumber);
};
export const checkEmail = email => {
  return emailFormat.test(email);
};
export const checkName = name => {
  return nameFormat.test(name);
};
export const checkNameAlphaNumeric = name => {
  return nameFormatAlphaNumeric.test(name);
};
export const checkLandlinePhone = phoneNumber => {
  return phoneLandlineFormat.test(phoneNumber);
};

export const checkPassword = password => {
  return passwordRegex.test(password);
};
