import React from 'react';
import HomeScreen from './HomeScreen';
import MedicationReminderScreen from './MedicationReminderScreen';
import SymptomCheckerScreen from './SymptomCheckerScreen';

function App() {
  return (
    <div className="App">
      <HomeScreen />
      <MedicationReminderScreen />
      <SymptomCheckerScreen />
    </div>
  );
}

export default App;
