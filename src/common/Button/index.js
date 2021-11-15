// Libs
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

// React Native Compopnents
import {TouchableOpacity, Text} from 'react-native';

// Styles
import styles from './styles';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#72A7FD', '#5993FF']}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
