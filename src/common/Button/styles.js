// Ract Native Components
import {StyleSheet} from 'react-native';

// Them
import {SIZES, COLORS} from '../../theme';

const styles = StyleSheet.create({
  buttonContainer: {
    padding: SIZES.radius,
    marginBottom: SIZES.padding,
    width: 300,
    borderRadius: SIZES.radius,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
  },
});

export default styles;
