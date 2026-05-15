import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { DailyScreen } from '../screens';

import type { DailyStackParamList } from './types';

const Stack = createStackNavigator<DailyStackParamList>();

export function DailyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DailyIndex"
        component={DailyScreen}
        options={{ title: 'Daily' }}
      />
    </Stack.Navigator>
  );
}
