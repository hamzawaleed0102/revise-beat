import {StyleSheet} from 'react-native';
import COLORS from '../Theme/Colors';
import {Metrics} from '../Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  icon: {
    width: 20,
    height: 20,
  },
  notesContainer: {
    padding: 20,
  },
  downloadBtn: {
    backgroundColor: COLORS.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 110,
    right: 20,
    opacity: 0.8,
  },
  sliderTimestampContainer: {
    marginTop: 10,
  },
  controlsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  leftControls: {
    flex: 1,
  },
  centerControls: {
    flex: 3,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  rightControls: {
    flex: 1,
    alignItems: 'flex-end',
  },
  timestampContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
