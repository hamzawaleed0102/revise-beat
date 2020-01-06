import {StyleSheet} from 'react-native';
import COLORS from '../Theme/Colors';
import {Metrics} from '../Theme';
import {FONTSTYLES, FONTFAMILY} from '../Theme/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  overlay: {
    backgroundColor: 'black',
    ...StyleSheet.absoluteFillObject,
    opacity: 0.4,
  },
  modelHeading: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.bold,
    fontSize: 15,
  },
  heading: {
    marginTop: 10,
    color: 'rgba(106, 106, 106, 1)',
    textAlign: 'center',
    fontSize: 15,
  },
  modelSubheading: {
    marginTop: 10,
    color: 'rgba(106, 106, 106, 1)',
    textAlign: 'center',
    fontSize: 13,
    paddingHorizontal: 20,
    fontFamily: FONTFAMILY.medium,
  },
  modelContainer: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: Metrics.screenHeight / 2.8,
    padding: 20,
    elevation: 6,
    borderRadius: 7,
  },
  bottomEditContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 5,
    zIndex: 10,
    padding: 20,
  },
  editorHeading: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  uploadedDocContainer: {
    flex: 1,
    padding: 20,
  },
  question: {
    textAlign: 'center',
    marginTop: 20,
    fontFamily: FONTFAMILY.medium,
    color: COLORS.gray,
  },
});
