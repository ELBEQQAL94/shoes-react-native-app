// Libs
import React from 'react';

// React Native Components
import {SafeAreaView, View} from 'react-native';

// Core Components
import {Tabbar} from '../components';

// Styles
import styles from './styles';

const MainLayout = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
      <Tabbar />
    </View>
  );
};

export default MainLayout;
