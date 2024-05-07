import React, { useState } from 'react'

import { Image, StyleSheet, Button, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import SelectInput from '@/components/SelectInput';

import { lineCalc } from '@/utils/LineCalc';

export default function HomeScreen() {
  const [lineOut, setLineOut] = useState('10 FT')
  const [weight, setWeight] = useState('1 oz')
  const [depth, setDepth] = useState(lineCalc('10 FT', '1 oz'))

  const handleLineOut = (value: any) => {
    setLineOut(value)
    if (value && depth)
      setDepth(lineCalc(value, weight))
  }

  const handleWeight = (value: any) => {
    setWeight(value)
    if (lineOut && value)
      setDepth(lineCalc(lineOut, value))
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello World!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Speed: ~1.5mph</ThemedText>
        <ThemedText type="subtitle">Line Weight: 10lb Mono</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Select Line Out Length</ThemedText>
        <SelectInput
          options={[
            { label: '10 FT', value: 1 },
            { label: '20 FT', value: 2 },
            { label: '30 FT', value: 3 },
          ]}
          onSelect={handleLineOut}
        />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Select Weight</ThemedText>
        <SelectInput
          options={[
            { label: '1 oz', value: 1 },
            { label: '1.5 oz', value: 2 },
            { label: '2 oz', value: 3 },
          ]}
          onSelect={handleWeight}
        />
      </ThemedView>
      {depth && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.titleText}>Depth: {depth}</ThemedText>
        </ThemedView>
      )}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
