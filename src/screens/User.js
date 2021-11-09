// Libs
import React from 'react';

// React Native Components
import {View, Text} from 'react-native';

// Layouts
import {MainLayout} from '../layouts';

const User = () => {
  return (
    <MainLayout>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>User</Text>
      </View>
    </MainLayout>
  );
};

export default User;
