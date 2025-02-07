import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Smart Health Assistant</Text>
      <Button title="Symptom Checker" onPress={() => navigation.navigate('SymptomChecker')} />
      <Button title="Medication Reminder" onPress={() => navigation.navigate('MedicationReminder')} />
      {/* Add more buttons for other screens */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});

export default HomeScreen;
