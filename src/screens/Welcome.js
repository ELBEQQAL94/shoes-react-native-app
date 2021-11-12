// Libs
import React, {useEffect, useState, useRef, createRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

// React Native Components
import {View, StyleSheet, Animated, Text, TouchableOpacity} from 'react-native';

// Constants
import {images} from '../constants';

// Core Components
import {OnBoardingItem, Paginator} from '../components';

// Theme
import {COLORS, SIZES} from '../theme';

const welcome = [
  {
    id: 1,
    title: "Life isn't perfect, But your sneakers can be",
    description:
      "I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do.",
    image: images.welcomeImage01,
  },
  {
    id: 2,
    title: "Life isn't perfect, But your sneakers can be",
    description:
      "I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do.",
    image: images.welcomeImage02,
  },
  {
    id: 3,
    title: "Life isn't perfect, But your sneakers can be",
    description:
      "I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do.",
    image: images.welcomeImage03,
  },
  {
    id: 4,
    title: "Life isn't perfect, But your sneakers can be",
    description:
      "I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do.",
    image: images.welcomeImage04,
  },
];

const Welcome = () => {
  const navigation = useNavigation();
  // States
  const [completed, setCompleted] = useState(false);

  // States
  const dots = welcome.map(item => ({
    ...item,
    ref: createRef(),
  }));

  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  useEffect(() => {
    scrollX.addListener(({value}) => {
      console.log(Math.floor(value / SIZES.width));
      if (Math.floor(value / SIZES.width) === welcome.length - 1) {
        setCompleted(true);
      }
    });
    return () => scrollX.removeListener();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={welcome}
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
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
