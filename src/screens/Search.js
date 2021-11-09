// Libs
import React, {useEffect} from 'react';

// Redux Tool Kit
import {useDispatch} from 'react-redux';

// React Native Components
import {View, Text} from 'react-native';

// Layouts
import {MainLayout} from '../layouts';

// Actions
import {setSelectedTabIndex} from '../stores/reducer/tabReducer';

const Search = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setSelectedTabIndex(1));
  // }, []);

  return (
    <MainLayout>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Search</Text>
      </View>
    </MainLayout>
  );
};

export default Search;
