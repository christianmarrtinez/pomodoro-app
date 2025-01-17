import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

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

  const renderButton = (title, time, setTime, isStudyTime) => {
    const isSelected = isStudyTime ? time === studyTime : time === breakTime;
    const buttonStyle = isSelected ? styles.selectedButton : styles.button;
    const textStyle = isSelected ? styles.selectedText : styles.text;

    return (
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          if (isStudyTime) {
            setStudyTime(time);
          } else {
            setBreakTime(time);
          }
        }}
      >
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Study Time</Text>
      <View style={styles.buttonRow}>
        {renderButton("20 min", 20 * 60, setStudyTime, true)}
        {renderButton("25 min", 25 * 60, setStudyTime, true)}
        {renderButton("30 min", 30 * 60, setStudyTime, true)}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Custom study time (min)"
        keyboardType="numeric"
        onChangeText={setCustomStudyTime}
        value={customStudyTime}
        placeholderTextColor="#8b51ff" // Purple placeholder text
      />
      <Text style={styles.header}>Select Break Time</Text>
      <View style={styles.buttonRow}>
        {renderButton("5 min", 5 * 60, setBreakTime, false)}
        {renderButton("10 min", 10 * 60, setBreakTime, false)}
        {renderButton("15 min", 15 * 60, setBreakTime, false)}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Custom break time (min)"
        keyboardType="numeric"
        onChangeText={setCustomBreakTime}
        value={customBreakTime}
        placeholderTextColor="#8b51ff" // Purple placeholder text
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
  button: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: "#8b51ff", // Purple border
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#000', // Default text color
  },
  selectedText: {
    fontSize: 14,
    color: "#8b51ff", // Purple text
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '80%',
    borderRadius: 5,
    textAlign: 'center',
    color: "#8b51ff", // Purple text color inside input
  },
});

export default CreateSession;

