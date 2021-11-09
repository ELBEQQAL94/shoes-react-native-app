// Libs
import React from 'react';

// React Native Components
import {StyleSheet, View} from 'react-native';

import {Tabbar} from '../components';

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
  },
});

export default MainLayout;
