// Libs
import React from 'react';

// React Native Component
import {View, Text} from 'react-native';

// Styles
import styles from './styles';

const HeaderTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nike</Text>
      <Text style={styles.mainTitle}>New Collection</Text>
    </View>
  );
};

export default HeaderTitle;
