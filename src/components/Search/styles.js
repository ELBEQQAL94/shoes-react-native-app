// React Native Components
import {StyleSheet} from 'react-native';

// Theme
import {COLORS, FONTS, SIZES} from '../../theme';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.lightGray,
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.base,
  },
  searchInputContainer: {
    flex: 1,
    color: COLORS.black,
  },
});

export default styles;
