// Libs
import React from 'react';

// React Native Components
import {View, Image} from 'react-native';

// Styles
import styles from './styles';

const ProductViewImage = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

export default ProductViewImage;
