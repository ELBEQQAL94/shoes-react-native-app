// Libs
import React from 'react';

// React Native Components
import {View, Text} from 'react-native';

// Layouts
import {MainLayout} from '../layouts';

const Cart = () => {
  return (
    <MainLayout>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Cart Page</Text>
      </View>
    </MainLayout>
  );
};

export default Cart;
