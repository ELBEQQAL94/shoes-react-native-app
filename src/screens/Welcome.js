// Libs
import React, {useEffect, useState, useRef, createRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import MMKVStorage from 'react-native-mmkv-storage';

// React Native Components
import {View, StyleSheet, Animated} from 'react-native';

// Core Components
import {OnBoardingItem, Paginator} from '../components';

// Theme
import {SIZES} from '../theme';

// Data
import data from '../data';

// Constants
import {screens} from '../constants';

// Common core components
import {Button} from '../common';

const Welcome = () => {
  const storage = new MMKVStorage.Loader().withEncryption().initialize();

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

  const lunchedApp = () => {
    navigation.navigate(screens.HOME_SCREEN);
    setLunchedApp();
  };

  const setLunchedApp = async () => {
    await storage.setBoolAsync('isLunched', true);
    let isLunched = await storage.getBoolAsync('isLunched');
    console.log('isLunched: ', isLunched);
  };

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

      {completed && <Button title="Get Started" onPress={lunchedApp} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;
