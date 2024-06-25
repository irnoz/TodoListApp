import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'Todo List' }} />
      <Stack.Screen name="Add" component={AddScreen} options={{ title: 'Add New Item' }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Todo Details' }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
