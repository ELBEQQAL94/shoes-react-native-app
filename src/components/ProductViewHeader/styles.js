// React Native Components
import {StyleSheet} from 'react-native';

// Theme
import {COLORS, FONTS, SIZES} from '../../theme';

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: SIZES.padding,
  },
  backIconContainer: {
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  productTitle: {
    color: COLORS.black,
    ...FONTS.body1,
  },
});

export default styles;
