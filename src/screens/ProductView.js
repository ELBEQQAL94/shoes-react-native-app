// Libs
import React from 'react';
import {useRoute} from '@react-navigation/native';

// React Native Components
import {StyleSheet, ScrollView} from 'react-native';

// Theme
import {COLORS, SIZES} from '../theme';

// Core Components
import {
  ProductViewHeader,
  ProductViewImage,
  ProductNameAndPrice,
  RenderProductColors,
} from '../components';

const ProductView = () => {
  const route = useRoute();
  const {item} = route.params;

  console.log('Product: ', item);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ProductViewHeader title={item.name} />
      <ProductViewImage image={item.image} />
      <ProductNameAndPrice name={item.name} price={item.price} />
      {/* Product Color & Product Size */}
      <RenderProductColors colors={item.colors} />
      {/* Add To Cart Button */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
});

export default ProductView;
