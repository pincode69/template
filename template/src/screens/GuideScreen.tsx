import React from 'react';

import type { StackNavigationProp } from '@react-navigation/stack';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import type { RootStackParamList } from '../navigation/types';

type Nav = StackNavigationProp<RootStackParamList, 'Guide'>;

type Props = {
  navigation: Nav;
};

const STEPS = [
  {
    title: 'Environment',
    body: 'Use Node 20.19.4+, JDK 17, and Android SDK per the project README.',
  },
  {
    title: 'Install',
    body: 'Run npm install in the project root. Use the same package manager in CI.',
  },
  {
    title: 'Run Android',
    body: 'Start Metro (npm start), then npm run android with a device or emulator.',
  },
  {
    title: 'Replace placeholders',
    body: 'Update app id, signing, keys in gradle.properties, and remove demo screens you do not need.',
  },
] as const;

export function GuideScreen({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.intro}>
        A short checklist for new developers. Edit this list to match your product and
        release process.
      </Text>
      {STEPS.map((step, index) => (
        <View key={step.title} style={styles.step}>
          <View style={styles.stepIndexWrap}>
            <Text style={styles.stepIndex}>{index + 1}</Text>
          </View>
          <View style={styles.stepBody}>
            <Text style={styles.stepTitle}>{step.title}</Text>
            <Text style={styles.stepText}>{step.body}</Text>
          </View>
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
    fontSize: 16,
    lineHeight: 24,
    color: '#334155',
    marginBottom: 20,
  },
  step: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  stepIndexWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  stepIndex: {
    fontWeight: '700',
    fontSize: 14,
    color: '#1d4ed8',
  },
  stepBody: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 4,
  },
  stepText: {
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
