import React from 'react';

import type { StackNavigationProp } from '@react-navigation/stack';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import type { RootStackParamList } from '../navigation/types';

type HomeNav = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNav;
};

type HomeLink =
  | { label: string; route: 'Details'; params: { title: string } }
  | { label: string; route: Exclude<keyof RootStackParamList, 'Details' | 'Home'> };

const LINKS: HomeLink[] = [
  { label: 'Details (sample)', route: 'Details', params: { title: 'From Home' } },
  { label: 'About app', route: 'AboutApp' },
  { label: 'Guide', route: 'Guide' },
  { label: 'Achievements', route: 'Achievements' },
  { label: 'Daily rewards', route: 'DailyRewards' },
];

export function HomeScreen({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.sub}>
        Boilerplate shortcuts — swap routes and copy for your product flows.
      </Text>
      <View style={styles.list}>
        {LINKS.map((item) => (
          <Pressable
            key={item.route + ('params' in item ? item.params.title : '')}
            style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
            onPress={() => {
              if (item.route === 'Details') {
                navigation.navigate('Details', item.params);
                return;
              }
              navigation.navigate(item.route);
            }}>
            <Text style={styles.rowText}>{item.label}</Text>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    padding: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  sub: {
    marginBottom: 20,
    opacity: 0.72,
    lineHeight: 22,
    fontSize: 15,
  },
  list: {
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f1f5f9',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  rowPressed: {
    opacity: 0.85,
    backgroundColor: '#e2e8f0',
  },
  rowText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0f172a',
  },
  chevron: {
    fontSize: 22,
    color: '#94a3b8',
    fontWeight: '300',
  },
});
