// React Native Components
import {StyleSheet} from 'react-native';

// Theme
import {COLORS, FONTS, SIZES} from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
  },
  image: {
    flex: 0.5,
    width: '100%',
    borderBottomRightRadius: SIZES.padding,
    borderBottomLeftRadius: SIZES.padding,
  },
  infoContainer: {
    flex: 0.5,
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  title: {
    color: COLORS.black,
    textAlign: 'center',
    fontWeight: 'bold',
    ...FONTS.body2,
  },
  description: {
    textAlign: 'center',
    marginTop: SIZES.radius,
    color: COLORS.gray,
  },
});

export default styles;
