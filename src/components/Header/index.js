// Libs
import React from 'react';

// React Native Component
import {View} from 'react-native';

// Styles
import styles from './styles';

const Header = ({leftComponent, children, rightComponent, styleContainer}) => {
  return (
    <View style={[styles.container, styleContainer]}>
      {leftComponent}
      {children}
      {rightComponent}
    </View>
  );
};

export default Header;
