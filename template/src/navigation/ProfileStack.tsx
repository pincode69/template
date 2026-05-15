import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { AboutAppScreen, ProfileScreen } from '../screens';

import type { ProfileStackParamList } from './types';

const Stack = createStackNavigator<ProfileStackParamList>();

export function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileIndex"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name="AboutApp"
        component={AboutAppScreen}
        options={{ title: 'About' }}
      />
    </Stack.Navigator>
  );
}
