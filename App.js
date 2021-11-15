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
import {Home, Search, User, Cart, ProductView, Welcome} from './src/screens';

// Constants
import {screens} from './src/constants';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={screens.WELCOME_SCREEN}>
          <Stack.Screen name={screens.WELCOME_SCREEN} component={Welcome} />
          <Stack.Screen name={screens.HOME_SCREEN} component={Home} />
          <Stack.Screen name={screens.SEARCH_SCREEN} component={Search} />
          <Stack.Screen name={screens.USER_SCREEN} component={User} />
          <Stack.Screen name={screens.CART_SCREEN} component={Cart} />
          <Stack.Screen
            name={screens.PRODUCT_VIEW_SCREEN}
            component={ProductView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
