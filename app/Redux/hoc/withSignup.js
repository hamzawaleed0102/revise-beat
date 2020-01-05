import {connect} from 'react-redux';
import {
  signupUser,
  updateUser,
  loginUser,
  verifyEmail,
} from '../actions/userAction';

const mapStateToProps = user => {
  return user.user;
};
const mapdispatchToProps = dispatch => ({
  signupUser: formData => dispatch(signupUser(formData)),
  updateUser: (formData, type) => dispatch(updateUser(formData, type)),
  verifyEmail: (formData, type) => dispatch(verifyEmail(formData, type)),
  loginUser: formData => dispatch(loginUser(formData)),
});

export const withSignup = Component => {
  // eslint-disable-next-line prettier/prettier
  return connect(mapStateToProps, mapdispatchToProps)(Component);
};
