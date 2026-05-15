import React from 'react';

import type { RouteProp } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import type { AchievementsStackParamList } from '../navigation/types';

type Props = { route: RouteProp<AchievementsStackParamList, 'AchievementDetail'> };

export function AchievementDetailScreen({ route }: Props) {
  const id = route.params?.id ?? 'unknown';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Achievement: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 20, fontWeight: '600' },
});
