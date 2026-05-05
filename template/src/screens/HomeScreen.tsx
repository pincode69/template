import React from 'react';

import type { StackNavigationProp } from '@react-navigation/stack';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import type { RootStackParamList } from '../navigation/types';

type HomeNav = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNav;
};

export function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.sub}>Starter screen</Text>
      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate('Details', { title: 'From Home' })
        }>
        <Text style={styles.buttonText}>Open Details</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  sub: {
    marginBottom: 24,
    opacity: 0.7,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#2563eb',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
