import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AchievementsStack } from './AchievementsStack';
import { DailyStack } from './DailyStack';
import { HomeStack } from './HomeStack';
import { ProfileStack } from './ProfileStack';
import type { TabsParamList } from './types';

const Tab = createBottomTabNavigator<TabsParamList>();

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Achievements"
        component={AchievementsStack}
        options={{ tabBarLabel: 'Achievements' }}
      />
      <Tab.Screen
        name="Daily"
        component={DailyStack}
        options={{ tabBarLabel: 'Daily' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
