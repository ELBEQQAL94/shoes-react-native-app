// Libs
import React from 'react';

// Redux Tool Kit
import {useDispatch, useSelector} from 'react-redux';

// React Native Component
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

// Constants
import {categories} from '../../constants';

// Styles
import styles from './styles';

// Actions
import {setSelectedCategory} from '../../stores/reducer/categoryReducer';
import {COLORS} from '../../theme';

const Categories = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    state => state.categoryState.selectedCategory,
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={categories}
        bounces={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                dispatch(setSelectedCategory(item.name.toLocaleLowerCase()))
              }
              style={styles.categoryContainer}>
              <Text
                style={[
                  styles.title,
                  selectedCategory === item.name.toLocaleLowerCase()
                    ? styles.activeCategory
                    : null,
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Categories;
