// LIBS
import React from 'react';

// React Native Navigation
import {NavigationContainer} from '@react-navigation/native';

// React Native Stack
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Redux Store
import {Provider} from 'react-redux';

// Store
import store from './src/stores';

// Screens
import {Home, Search, User, Cart, ProductView} from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Home'}>
          {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="ProductView" component={ProductView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
