// React Native Components
import {StyleSheet} from 'react-native';

// Theme
import {COLORS, FONTS} from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: COLORS.black,
    fontWeight: 'bold',
    flex: 1,
    ...FONTS.body1,
  },
  price: {
    color: COLORS.darkGreen,
    ...FONTS.body2,
  },
});

export default styles;
