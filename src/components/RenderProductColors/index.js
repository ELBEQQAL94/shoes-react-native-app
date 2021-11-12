// Libs
import React from 'react';

// React Native Components
import {View, Text} from 'react-native';

// Styles
import styles from './styles';

const RenderProductColors = ({colors}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Colors</Text>
      <View style={styles.boxContainer}>
        {colors.map((item, index) => (
          <View style={[styles.box, {backgroundColor: item.color}]} />
        ))}
      </View>
    </View>
  );
};

export default RenderProductColors;
