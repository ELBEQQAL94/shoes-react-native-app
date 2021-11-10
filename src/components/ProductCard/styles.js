// React Native Components
import {StyleSheet} from 'react-native';

// Theme
import {COLORS, FONTS, SIZES} from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 260,
    paddingHorizontal: SIZES.padding,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: SIZES.radius,
  },
  productName: {
    color: COLORS.black,
    fontWeight: 'bold',
    ...FONTS.body2,
  },
  productPrice: {
    color: COLORS.darkGreen,
    ...FONTS.body3,
  },
});

export default styles;
