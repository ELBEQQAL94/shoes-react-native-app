// React Native Components
import {StyleSheet} from 'react-native';

// Theme
import {COLORS, FONTS} from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  title: {
    color: COLORS.dark,
    ...FONTS.body2,
  },
  boxContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  box: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    marginRight: 20,
    borderColor: COLORS.darkBlue,
    borderWidth: 2,
  },
});

export default styles;
