import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput, Text } from 'react-native';

const CreateSession = ({ navigation }) => {
  const [studyTime, setStudyTime] = useState(null);
  const [breakTime, setBreakTime] = useState(null);
  const [customStudyTime, setCustomStudyTime] = useState('');
  const [customBreakTime, setCustomBreakTime] = useState('');

  const handleStartSession = () => {
    if (studyTime && breakTime) {
      navigation.navigate('Timer', { studyTime, breakTime });
    } else {
      alert('Please select both study and break times!');
    }
  };

  const selectCustomTime = () => {
    if (customStudyTime) setStudyTime(parseInt(customStudyTime, 10) * 60);
    if (customBreakTime) setBreakTime(parseInt(customBreakTime, 10) * 60);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Study Time</Text>
      <View style={styles.buttonRow}>
        <Button title="20 min" onPress={() => setStudyTime(20 * 60)} />
        <Button title="25 min" onPress={() => setStudyTime(25 * 60)} />
        <Button title="30 min" onPress={() => setStudyTime(30 * 60)} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Custom study time (min)"
        keyboardType="numeric"
        onChangeText={setCustomStudyTime}
        value={customStudyTime}
      />
      <Text style={styles.header}>Select Break Time</Text>
      <View style={styles.buttonRow}>
        <Button title="5 min" onPress={() => setBreakTime(5 * 60)} />
        <Button title="10 min" onPress={() => setBreakTime(10 * 60)} />
        <Button title="15 min" onPress={() => setBreakTime(15 * 60)} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Custom break time (min)"
        keyboardType="numeric"
        onChangeText={setCustomBreakTime}
        value={customBreakTime}
      />
      <Button title="Set Custom Times" onPress={selectCustomTime} />
      <Button title="Start Session" onPress={handleStartSession} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '80%',
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default CreateSession;
