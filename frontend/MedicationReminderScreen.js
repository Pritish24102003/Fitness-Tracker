import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const MedicationReminderScreen = () => {
  const [medication, setMedication] = React.useState('');

  const setReminder = () => {
    // Call backend API to set medication reminder
    console.log(medication);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medication Reminder</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter medication details"
        onChangeText={setMedication}
      />
      <Button title="Set Reminder" onPress={setReminder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  input: { borderWidth: 1, padding: 10, width: '80%', marginVertical: 10 },
});

export default MedicationReminderScreen;
