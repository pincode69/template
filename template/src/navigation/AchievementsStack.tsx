import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { AchievementDetailScreen, AchievementsScreen } from '../screens';

import type { AchievementsStackParamList } from './types';

const Stack = createStackNavigator<AchievementsStackParamList>();

export function AchievementsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AchievementsIndex"
        component={AchievementsScreen}
        options={{ title: 'Achievements' }}
      />
      <Stack.Screen
        name="AchievementDetail"
        component={AchievementDetailScreen}
        options={{ title: 'Achievement' }}
      />
    </Stack.Navigator>
  );
}
