import React from 'react';

import type { StackNavigationProp } from '@react-navigation/stack';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import type { RootStackParamList } from '../navigation/types';

type Nav = StackNavigationProp<RootStackParamList, 'AboutApp'>;

type Props = {
  navigation: Nav;
};

export function AboutAppScreen({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.card}>
        <Text style={styles.label}>App name</Text>
        <Text style={styles.value}>MasterTemplate</Text>
        <Text style={styles.hint}>
          Replace with your display name in native projects and marketing copy.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Version</Text>
        <Text style={styles.value}>0.0.1</Text>
        <Text style={styles.hint}>Keep in sync with package.json and store listings.</Text>
      </View>
      <Text style={styles.body}>
        This screen is a starter template. Add your team, support links, privacy policy,
        and licenses here. Plug in analytics when you add a vendor.
      </Text>
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
  card: {
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748b',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  value: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0f172a',
  },
  hint: {
    marginTop: 8,
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: '#334155',
    marginBottom: 24,
  },
  button: {
    alignSelf: 'flex-start',
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
