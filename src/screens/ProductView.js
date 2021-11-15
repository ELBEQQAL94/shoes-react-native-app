// Libs
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

// React Native Components
import {StyleSheet, ScrollView, ToastAndroid, View} from 'react-native';

// Theme
import {COLORS, SIZES} from '../theme';

// Core Components
import {
  ProductViewHeader,
  ProductViewImage,
  ProductNameAndPrice,
  RenderProductColors,
} from '../components';

// Common core components
import {Button} from '../common';

// Actions
import {setItemToCard} from '../stores/reducer/cartReducer';

const ProductView = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState(null);

  const route = useRoute();
  const {item} = route.params;
  const relatedProductImage =
    item.colors.filter(relatedProduct => color === relatedProduct.color)[0]
      ?.image || item.image;

  const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Item added to cart',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const addItemToCart = () => {
    dispatch(setItemToCard(item));
    showToast();
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ProductViewHeader title={item.name} />
      <ProductViewImage image={relatedProductImage} />
      <ProductNameAndPrice name={item.name} price={item.price} />
      <RenderProductColors colors={item.colors} setColor={setColor} />
      <View style={styles.addToCartButtonContainer}>
        <Button title="Add To Cart" onPress={addItemToCart} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  addToCartButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: SIZES.padding,
  },
});

export default ProductView;
