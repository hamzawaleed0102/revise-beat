import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../Theme';
import COLORS from '../Theme/Colors';

export default StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 18,
    color: '#1E1E22',
  },
  leftCol: {
    flex: 0.5,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  col: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: 'white',
    margin: 5,
    marginVertical: 10,
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 1, height: 3},
    borderRadius: 6,
  },
  slider: {
    transform: [{rotate: '-90deg'}],
    alignSelf: 'center',

    width: Metrics.screenHeight / 2.6,
  },
  percentLabel: {
    color: COLORS.blackText,
    fontSize: 12,
    marginVertical: 15,
  },
  bottomContainer: {
    bottom: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  bottomLabel: {
    flex: 1,
    textAlign: 'center',
    color: COLORS.blackText,
  },
});
