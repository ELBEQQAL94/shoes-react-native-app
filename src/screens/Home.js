// Libs
import React from 'react';

// React Native Components
import {View, Text, TouchableOpacity} from 'react-native';

// Layouts
import {MainLayout} from '../layouts';

const Home = ({navigation}) => {
  return (
    <MainLayout>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Page</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Text>Go Search</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

export default Home;
