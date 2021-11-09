// Libs
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

// Redux Tool Kit
import {useSelector, useDispatch} from 'react-redux';

// React Native Components
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

// Actions
import {setSelectedTabIndex} from '../stores/reducer/tabReducer';

// Constants
import {SIZES} from '../theme';

const {width} = SIZES;

const StaticTabbar = ({tabs, value}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selectedTabIndex = useSelector(
    state => state.tabState.selectedTabIndex,
  );

  const values = tabs.map(
    (tab, index) => new Animated.Value(index === 0 ? 1 : 0),
  );

  useEffect(() => {
    onPress(selectedTabIndex);
  }, [selectedTabIndex]);

  const onPress = (index, tab) => {
    const tabWidth = width / tabs.length;
    Animated.sequence([
      Animated.parallel(
        values.map(v =>
          Animated.timing(v, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
          }),
        ),
      ),
      Animated.parallel([
        Animated.spring(value, {
          toValue: tabWidth * index,
          useNativeDriver: true,
        }),
        Animated.spring(values[index], {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab, key) => {
        const tabWidth = width / tabs.length;
        const cursor = tabWidth * key;
        const opacity = value.interpolate({
          inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
          outputRange: [1, 0, 1],
          extrapolate: 'clamp',
        });
        const translateY = values[key].interpolate({
          inputRange: [0, 1],
          outputRange: [64, 0],
          extrapolate: 'clamp',
        });
        const opacity1 = values[key].interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        });
        return (
          <React.Fragment {...{key}}>
            <TouchableWithoutFeedback
              onPress={() => {
                onPress(key);
                dispatch(setSelectedTabIndex(key));
                navigation.navigate(tab.screen);
              }}>
              <Animated.View style={[styles.tab, {opacity}]}>
                <Icon name={tab.name} color="white" size={25} />
              </Animated.View>
            </TouchableWithoutFeedback>
            <Animated.View
              style={{
                position: 'absolute',
                top: -8,
                left: tabWidth * key,
                width: tabWidth,
                height: 64,
                justifyContent: 'center',
                alignItems: 'center',
                opacity: opacity1,
                transform: [{translateY}],
              }}>
              <View style={styles.activeIcon}>
                <Icon name={tab.name} color="#639AFE" size={25} />
              </View>
            </Animated.View>
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
  },
  activeIcon: {
    marginBottom: 10,
    backgroundColor: '#18191D',
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StaticTabbar;
