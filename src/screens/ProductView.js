// Libs
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// React Native Components
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';

// Theme
import {COLORS, SIZES} from '../theme';

// Core Components
import {Header} from '../components';

// Constants
import {icons} from '../constants';

const ProductView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Product View Header */}
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
          <View>
            <Text>Right</Text>
          </View>
        }>
        <View>
          <Text>Center</Text>
        </View>
      </Header>
      {/* Product Image */}
      {/* Product Name & Price */}
      {/* Product Color & Product Size */}
      {/* Add To Cart Button */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: SIZES.padding,
  },
  backIconContainer: {
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  container: {
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
});

export default ProductView;
