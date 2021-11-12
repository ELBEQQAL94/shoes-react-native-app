// Libs
import React from 'react';

// React Native Component
import {View, Image, Text} from 'react-native';

// Styles
import styles from './styles';

const OnBoardingItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;
