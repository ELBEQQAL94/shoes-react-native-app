// Libs
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

// React Native Component
import {View, TextInput} from 'react-native';

// Styles
import styles from './styles';

// Theme
import {COLORS} from '../../theme';

const Search = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={25} color={COLORS.blue} />
      <TextInput
        placeholder="Type name..."
        style={styles.searchInputContainer}
      />
      <Icon name="filter" size={25} color={COLORS.blue} />
    </View>
  );
};

export default Search;
