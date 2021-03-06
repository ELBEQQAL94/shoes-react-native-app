import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Animated,
} from 'react-native';
import * as shape from 'd3-shape';
import Svg, {Path} from 'react-native-svg';

// Core Components
import StaticTabbar from './StaticTabbar';

// Data
import data from '../data';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const {width} = Dimensions.get('window');
const height = 64;

const tabWidth = width / data.tabs.length;
const backgroundColor = '#18191D';

const getPath = () => {
  const left = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)([
    {x: 0, y: 0},
    {x: width, y: 0},
  ]);
  const tab = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(shape.curveBasis)([
    {x: width, y: 0},
    {x: width + 5, y: 0},
    {x: width + 10, y: 10},
    {x: width + 15, y: height},
    {x: width + tabWidth - 15, y: height},
    {x: width + tabWidth - 10, y: 10},
    {x: width + tabWidth - 5, y: 0},
    {x: width + tabWidth, y: 0},
  ]);
  const right = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)([
    {x: width + tabWidth, y: 0},
    {x: width * 2, y: 0},
    {x: width * 2, y: height},
    {x: 0, y: height},
    {x: 0, y: 0},
  ]);
  return `${left} ${tab} ${right}`;
};
const d = getPath();

const Tabbar = () => {
  const value = new Animated.Value(0);

  const translateX = value.interpolate({
    inputRange: [0, width],
    outputRange: [-width, 0],
  });
  return (
    <View style={styles.tabbarContainer}>
      <View {...{height, width}}>
        <AnimatedSvg
          width={width * 2}
          {...{height}}
          style={{transform: [{translateX}]}}>
          <Path fill={backgroundColor} {...{d}} />
        </AnimatedSvg>
        <View style={StyleSheet.absoluteFill}>
          <StaticTabbar {...{tabs: data.tabs, value}} />
        </View>
      </View>
      <SafeAreaView style={styles.container} />
    </View>
  );
};

const styles = StyleSheet.create({
  tabbarContainer: {
    position: 'absolute',
    bottom: 0,
  },
  container: {
    backgroundColor,
  },
});

export default Tabbar;
