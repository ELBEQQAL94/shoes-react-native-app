// React Native Components
import {StyleSheet} from 'react-native';

// Theme
import {SIZES} from '../../theme';

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.padding,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
