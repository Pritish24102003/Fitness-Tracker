import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const SymptomCheckerScreen = () => {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState(null);

  const checkSymptoms = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/check_symptoms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptoms: symptoms.split(',').map(Number) })
      });
      const data = await response.json();
      setResult(data.predictions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Symptom Checker</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter symptoms as comma-separated values"
        onChangeText={setSymptoms}
        value={symptoms}
      />
      <Button title="Check Symptoms" onPress={checkSymptoms} />
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Predictions:</Text>
          <Text>{JSON.stringify(result)}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, width: '100%', marginVertical: 10 },
  resultContainer: { marginTop: 20 },
  resultTitle: { fontSize: 18, fontWeight: 'bold' },
});

export default SymptomCheckerScreen;
