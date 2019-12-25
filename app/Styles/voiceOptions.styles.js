import {StyleSheet} from 'react-native';
import COLORS from '../Theme/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redCard: {
    backgroundColor: COLORS.primary,
    width: '80%',
    paddingVertical: 50,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconLabel: {
    color: 'white',
    fontSize: 15,
    marginLeft: 5,
  },
});
