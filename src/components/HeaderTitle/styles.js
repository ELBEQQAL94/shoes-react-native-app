// React Native Components
import {StyleSheet} from 'react-native';

// Theme
import {COLORS, FONTS, SIZES} from '../../theme';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
  },
  title: {
    color: COLORS.gray,
    ...FONTS.body1,
  },
  mainTitle: {
    color: COLORS.black,
    fontWeight: 'bold',
    ...FONTS.h1,
  },
});

export default styles;
