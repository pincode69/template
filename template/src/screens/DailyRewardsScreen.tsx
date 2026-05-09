import React, { useCallback, useState } from 'react';

import type { StackNavigationProp } from '@react-navigation/stack';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import type { RootStackParamList } from '../navigation/types';

type Nav = StackNavigationProp<RootStackParamList, 'DailyRewards'>;

type Props = {
  navigation: Nav;
};

export function DailyRewardsScreen({ navigation }: Props) {
  const [claimedToday, setClaimedToday] = useState(false);
  const [streak, setStreak] = useState(0);

  const onClaim = useCallback(() => {
    if (claimedToday) {
      Alert.alert('Daily reward', 'You already claimed today in this demo.');
      return;
    }
    setClaimedToday(true);
    setStreak((s) => s + 1);
    Alert.alert('Daily reward', 'Template only — connect your economy service here.');
  }, [claimedToday]);

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.hero}>
        <Text style={styles.streakLabel}>Current streak</Text>
        <Text style={styles.streakValue}>{streak}</Text>
        <Text style={styles.streakHint}>Resets logic is not implemented yet.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today&apos;s crate</Text>
        <Text style={styles.cardBody}>
          Starter copy: coins, boosts, or cosmetic tokens. Swap this card for your reward
          definition and rarity tiers.
        </Text>
      </View>
      <Pressable
        style={[styles.claimBtn, claimedToday && styles.claimBtnDone]}
        onPress={onClaim}>
        <Text style={[styles.claimBtnText, claimedToday && styles.claimBtnTextDone]}>
          {claimedToday ? 'Claimed (demo)' : 'Claim daily reward'}
        </Text>
      </Pressable>
      <Pressable style={styles.secondary} onPress={() => navigation.goBack()}>
        <Text style={styles.secondaryText}>Back</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    padding: 24,
    paddingBottom: 40,
  },
  hero: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
  },
  streakLabel: {
    color: '#94a3b8',
    fontSize: 14,
    marginBottom: 4,
  },
  streakValue: {
    color: '#f8fafc',
    fontSize: 42,
    fontWeight: '700',
  },
  streakHint: {
    color: '#94a3b8',
    marginTop: 8,
    fontSize: 13,
  },
  card: {
    backgroundColor: '#fff7ed',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#fdba74',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#9a3412',
    marginBottom: 8,
  },
  cardBody: {
    fontSize: 15,
    lineHeight: 22,
    color: '#431407',
  },
  claimBtn: {
    backgroundColor: '#ea580c',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  claimBtnDone: {
    backgroundColor: '#cbd5e1',
  },
  claimBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  claimBtnTextDone: {
    color: '#334155',
  },
  secondary: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  secondaryText: {
    color: '#475569',
    fontWeight: '600',
    fontSize: 16,
  },
});
