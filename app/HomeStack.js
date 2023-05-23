import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import ArtistDetails from './ArtistDetails'; // 你需要创建这个组件来显示画家的详细信息
import ArtworkDetails from './ArtworkDetails'; // 你需要创建这个组件来显示画作的详细信息

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ArtistDetails" component={ArtistDetails} />
      <Stack.Screen name="ArtworkDetails" component={ArtworkDetails} />
    </Stack.Navigator>
  );
}

export default HomeStack;
