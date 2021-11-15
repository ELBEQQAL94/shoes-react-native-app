// Libs
import React from 'react';

// React Native Components
import {View, Text, TouchableWithoutFeedback} from 'react-native';

// Styles
import styles from './styles';

const RenderProductColors = ({colors, setColor}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Colors</Text>
      <View style={styles.boxContainer}>
        {colors.map(item => (
          <TouchableWithoutFeedback onPress={() => setColor(item.color)}>
            <View
              style={[styles.box, {backgroundColor: item.color}]}
              key={item.id}
            />
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  );
};

export default RenderProductColors;
