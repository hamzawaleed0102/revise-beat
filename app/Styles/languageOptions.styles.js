import {StyleSheet} from 'react-native';
import {Colors} from '../Theme';
import COLORS from '../Theme/Colors';

export default StyleSheet.create({
  heading: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  listCard: {
    elevation: 2,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginTop: 15,
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 1, height: 3},
    borderWidth: 2,
    borderColor: 'white',
  },
  selectedListCard: {
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  listLabel: {
    color: COLORS.blackText,
  },
});
