// Libs
import React from 'react';

// React Native Components
import {StyleSheet, View} from 'react-native';

// Core Components
import {Tabbar} from '../components';

// Theme
import {COLORS, SIZES} from '../theme';

const MainLayout = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
      <Tabbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
});

export default MainLayout;
