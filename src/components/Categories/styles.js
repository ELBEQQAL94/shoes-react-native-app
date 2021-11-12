// React Native Components
import {StyleSheet} from 'react-native';

// Theme
import {COLORS, FONTS, SIZES} from '../../theme';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
    flex: 1,
    justifyContent: 'space-between',
    height: 80,
  },
  categoryContainer: {
    alignItems: 'center',
    marginRight: SIZES.padding,
    marginTop: 10,
    height: 30,
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    marginBottom: -8,
    color: COLORS.black,
    ...FONTS.body2,
  },
  activeCategory: {
    color: COLORS.darkBlue,
    fontWeight: 'bold',
    borderBottomWidth: 3,
    borderBottomColor: COLORS.darkGreen,
  },
});

export default styles;
