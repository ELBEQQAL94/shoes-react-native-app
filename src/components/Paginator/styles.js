// React Native Components
import {StyleSheet} from 'react-native';

// Theme
import {COLORS, SIZES} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.gray,
    marginHorizontal: 8,
    height: 10,
  },
});

export default styles;
