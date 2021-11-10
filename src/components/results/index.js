// Libs
import React from 'react';

// Redux Tool Kit
import {useSelector} from 'react-redux';

// React Native Component
import {View, FlatList} from 'react-native';

// Styles
import styles from './styles';

// Dummy Data
import data from '../../data';

// Core Components
import ProductCard from '../ProductCard';
import Categories from '../Categories';

const NUM_OF_COLOMUNS = 2;

const Results = () => {
  const selectedCategory = useSelector(
    state => state.categoryState.selectedCategory,
  );
  return (
    <View style={styles.container}>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={data[selectedCategory]}
        bounces={false}
        scrollEventThrottle={16}
        numColumns={NUM_OF_COLOMUNS}
        ListHeaderComponent={<Categories />}
        renderItem={({item}) => {
          return (
            <View style={styles.productContainer}>
              <ProductCard item={item} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Results;
