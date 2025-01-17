import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { vibrate } from '../utils';

export default class TimerScreen extends React.Component {
  constructor(props) {
    super(props);

    // Retrieve the initial study time and break time from navigation params
    const { route } = props;
    const { studyTime, breakTime } = route.params;

    this.state = {
      time: studyTime, // Initialize with the selected study time
      timerRunning: false,
      timerLabel: 'Work Time',
      studyTime, // Store study time for resetting
      breakTime, // Store break time for switching
    };

    this.timer = null;
  }

  toggleTimer = () => {
    const { timerRunning } = this.state;
    if (timerRunning) {
      clearInterval(this.timer);
    } else {
      this.timer = setInterval(this.decrementTime, 1000);
    }
    this.setState({ timerRunning: !timerRunning });
  };

  decrementTime = () => {
    const { time } = this.state;
    if (time === 0) {
      this.toggleTimer();
      vibrate(); // Trigger vibration when the timer hits 0
      this.switchTimer();
    } else {
      this.setState({ time: time - 1 });
    }
  };

  switchTimer = () => {
    const { timerLabel, studyTime, breakTime } = this.state;
    if (timerLabel === 'Work Time') {
      this.setState({ time: breakTime, timerLabel: 'Break Time' }); // Switch to break time
    } else {
      this.setState({ time: studyTime, timerLabel: 'Work Time' }); // Switch back to study time
    }
  };

  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  resetTimer = () => {
    const { timerLabel, studyTime, breakTime } = this.state;
    // Reset to the initial study or break time based on the current label
    const resetTime = timerLabel === 'Work Time' ? studyTime : breakTime;
    this.setState({ time: resetTime, timerRunning: false });
    clearInterval(this.timer);
  };

  render() {
    const { time, timerLabel, timerRunning } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{timerLabel}</Text>
        <Text style={styles.timer}>{this.formatTime(time)}</Text>
        <Button
          title={timerRunning ? 'Stop' : 'Start'}
          onPress={this.toggleTimer}
        />
        <Button title="Reset" onPress={this.resetTimer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b51ff', // Purple background
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff', // White text
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff', // White text
  },
});
