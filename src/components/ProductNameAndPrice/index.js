// Libs
import React from 'react';

// React Native Component
import {View, Text} from 'react-native';

// Styles
import styles from './styles';

const ProductNameAndPrice = ({name, price}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

export default ProductNameAndPrice;
