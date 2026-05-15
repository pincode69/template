import React from 'react';

import type { StackNavigationProp } from '@react-navigation/stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { ProfileStackParamList } from '../navigation/types';

type Nav = StackNavigationProp<ProfileStackParamList, 'ProfileIndex'>;

type Props = { navigation: Nav };

export function ProfileScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('AboutApp')}>
        <Text style={styles.buttonText}>About</Text>
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
