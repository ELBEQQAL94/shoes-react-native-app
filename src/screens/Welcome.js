// Libs
import React, {useEffect, useState, useRef, createRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

// React Native Components
import {View, StyleSheet, Animated, Text, TouchableOpacity} from 'react-native';

// Core Components
import {OnBoardingItem, Paginator} from '../components';

// Theme
import {COLORS, SIZES} from '../theme';

// Data
import data from '../data';

// Constants
import {screens} from '../constants';

const Welcome = () => {
  const navigation = useNavigation();

  // States
  const [completed, setCompleted] = useState(false);

  // States
  const dots = data.welcome.map(item => ({
    ...item,
    ref: createRef(),
  }));

  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  useEffect(() => {
    scrollX.addListener(({value}) => {
      if (Math.floor(value / SIZES.width) === data.welcome.length - 1) {
        setCompleted(true);
      }
    });
    return () => scrollX.removeListener();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data.welcome}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => <OnBoardingItem item={item} />}
        horizontal
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={32}
        ref={slidesRef}
        snapToAlignment="center"
        decelerationRate="fast"
      />
      <Paginator data={dots} scrollX={scrollX} />

      {completed && (
        <TouchableOpacity onPress={() => navigation.navigate(screens.HOME_SCREEN)}>
          <LinearGradient
            colors={['#72A7FD', '#5993FF']}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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

export default Welcome;
