// Libs
import React, {useRef} from 'react';

// React Native Component
import {Animated} from 'react-native';

// Theme
import {COLORS, SIZES} from '../../theme';

// Styles
import styles from './styles';

const Paginator = ({data, scrollX}) => {
  const containerRef = useRef();
  return (
    <Animated.View style={styles.container} ref={containerRef}>
      {data.map((item, index) => {
        const inputRange = [
          (index - 1) * SIZES.width,
          index * SIZES.width,
          (index + 1) * SIZES.width,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 40, 10],
          extrapolate: 'clamp',
        });
        const dotBackgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [COLORS.gray, COLORS.darkBlue, COLORS.gray],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[
              styles.dot,
              {width: dotWidth, backgroundColor: dotBackgroundColor},
            ]}
            key={`dot-${index}`}
            ref={item.ref}
          />
        );
      })}
    </Animated.View>
  );
};

export default Paginator;
