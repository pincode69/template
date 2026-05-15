import React from 'react';

import type { StackNavigationProp } from '@react-navigation/stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { HomeStackParamList } from '../navigation/types';

type Nav = StackNavigationProp<HomeStackParamList, 'HomeIndex'>;

type Props = { navigation: Nav };

export function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Details', { title: 'Details' })}>
        <Text style={styles.buttonText}>Open Details</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 24 },
  button: { backgroundColor: '#007AFF', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
