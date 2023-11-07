import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Jobs from './pages/JobsStack/Jobs';
import JobDetail from './pages/JobsStack/JobDetail';
import Favorites from './pages/FavoritesStack/Favorites';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const JobsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#ef5350',
      }}>
      <Stack.Screen name="Jobs" component={Jobs} />
      <Stack.Screen name="JobDetail" component={JobDetail} />
    </Stack.Navigator>
  );
};

const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#ef5350',
      }}>
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
};

const renderIcon = (focused, name, color, size) => {
  let iconName;

  if (name === 'JobsStack') {
    iconName = focused ? 'briefcase' : 'briefcase-outline';
  } else if (name === 'FavoritesStack') {
    iconName = focused ? 'heart' : 'heart-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) =>
            renderIcon(focused, route.name, color, size),
          tabBarActiveTintColor: '#ef5350',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen
          options={{
            tabBarLabel: 'Jobs',
          }}
          name="JobsStack"
          component={JobsStack}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Favorited Jobs',
          }}
          name="FavoritesStack"
          component={FavoritesStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
