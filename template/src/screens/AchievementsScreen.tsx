import React from 'react';

import type { StackNavigationProp } from '@react-navigation/stack';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import type { RootStackParamList } from '../navigation/types';

type Nav = StackNavigationProp<RootStackParamList, 'Achievements'>;

type Props = {
  navigation: Nav;
};

const ITEMS = [
  { id: 'first_open', title: 'First open', unlocked: true, description: 'Launched the app.' },
  {
    id: 'seven_day',
    title: 'Week streak',
    unlocked: false,
    description: 'Open the app seven days in a row.',
  },
  {
    id: 'collector',
    title: 'Reward collector',
    unlocked: false,
    description: 'Claim five daily rewards.',
  },
] as const;

export function AchievementsScreen({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.intro}>
        Template achievements wired for UI only. Persist progress with your backend or local
        storage when you integrate gameplay.
      </Text>
      {ITEMS.map((item) => (
        <View
          key={item.id}
          style={[styles.row, item.unlocked ? styles.rowUnlocked : styles.rowLocked]}>
          <Text style={[styles.badge, item.unlocked ? styles.badgeOn : styles.badgeOff]}>
            {item.unlocked ? 'Unlocked' : 'Locked'}
          </Text>
          <Text style={styles.rowTitle}>{item.title}</Text>
          <Text style={styles.rowBody}>{item.description}</Text>
        </View>
      ))}
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    padding: 24,
    paddingBottom: 40,
  },
  intro: {
    fontSize: 15,
    lineHeight: 22,
    color: '#475569',
    marginBottom: 16,
  },
  row: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
  },
  rowUnlocked: {
    backgroundColor: '#ecfdf5',
    borderColor: '#6ee7b7',
  },
  rowLocked: {
    backgroundColor: '#f8fafc',
    borderColor: '#e2e8f0',
    opacity: 0.9,
  },
  badge: {
    alignSelf: 'flex-start',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  badgeOn: {
    color: '#047857',
  },
  badgeOff: {
    color: '#64748b',
  },
  rowTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 4,
  },
  rowBody: {
    fontSize: 14,
    lineHeight: 20,
    color: '#475569',
  },
  button: {
    alignSelf: 'flex-start',
    marginTop: 8,
    backgroundColor: '#334155',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
