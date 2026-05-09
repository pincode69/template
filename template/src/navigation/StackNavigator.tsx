import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import {
  AboutAppScreen,
  AchievementsScreen,
  DailyRewardsScreen,
  DetailsScreen,
  GuideScreen,
  HomeScreen,
} from '../screens';

import type { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details' }}
      />
      <Stack.Screen
        name="AboutApp"
        component={AboutAppScreen}
        options={{ title: 'About app' }}
      />
      <Stack.Screen
        name="Guide"
        component={GuideScreen}
        options={{ title: 'Guide' }}
      />
      <Stack.Screen
        name="Achievements"
        component={AchievementsScreen}
        options={{ title: 'Achievements' }}
      />
      <Stack.Screen
        name="DailyRewards"
        component={DailyRewardsScreen}
        options={{ title: 'Daily rewards' }}
      />
    </Stack.Navigator>
  );
}
