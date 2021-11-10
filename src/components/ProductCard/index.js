// Libs
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// React Native Component
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';

// Styles
import styles from './styles';

const ProductCard = ({item}) => {
  const navigation = useNavigation();

  const onPress = () => navigation.navigate('ProductView');

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </TouchableWithoutFeedback>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
  );
};

export default ProductCard;
