// Libs
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

// React Native Component
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

// Constants
import {icons} from '../constants';

// Layouts
import {MainLayout} from '../layouts';

// Core Components
import {Header, HeaderTitle, Search, Categories, Results} from '../components';

// Theme
import {COLORS} from '../theme';

const Home = () => {
  return (
    <MainLayout>
      <Header
        leftComponent={
          <View>
            <Image
              source={icons.logo}
              style={styles.logoStyle}
              resizeMode="contain"
            />
          </View>
        }
        rightComponent={
          <TouchableOpacity
            style={styles.barIconContainer}
            onPress={() => console.log('OPEN DRAWER')}>
            <Icon name="bar-chart-2" size={25} />
          </TouchableOpacity>
        }
      />

      <HeaderTitle />
      <Search />
      <Categories />
      <Results />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    width: 40,
    height: 40,
  },
  barIconContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    color: COLORS.gray,
    transform: [
      {
        rotate: '-90deg',
      },
    ],
  },
});

export default Home;
