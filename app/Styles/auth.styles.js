import {StyleSheet} from 'react-native';
import COLORS from '../Theme/Colors';
export default StyleSheet.create({
  form: {
    paddingHorizontal: 12,
    paddingTop: 60,
    paddingBottom: 10,
  },
  alreadyAccountLabel: {
    textAlign: 'center',
    marginTop: 22,
  },
  redText: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  forgotTxt: {
    color: COLORS.primary,
  },
  topLabel: {
    color: COLORS.blackText,
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: '5%',
  },
});
