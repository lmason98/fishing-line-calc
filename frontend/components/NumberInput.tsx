import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

const NumberInput = () => {
  const [number, setNumber] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default NumberInput;