// Libs
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// React Native Components
import {View, TouchableOpacity, Text, Image} from 'react-native';

// Core Components
import Header from '../Header';

// Constants
import {icons} from '../../constants';

// Styles
import styles from './styles';

const ProductViewHeader = ({title}) => {
  // Hooks
  const navigation = useNavigation();

  return (
    <Header
      styleContainer={styles.headerContainer}
      leftComponent={
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={() => navigation.goBack()}>
          <Image source={icons.back} style={styles.backIcon} />
        </TouchableOpacity>
      }
      rightComponent={
        <View style={styles.backIconContainer}>
          <Image source={icons.love} style={styles.backIcon} />
        </View>
      }>
      <Text style={styles.productTitle} numberOfLines={1}>
        {title}
      </Text>
    </Header>
  );
};

export default ProductViewHeader;
