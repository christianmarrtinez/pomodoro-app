import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { vibrate } from '../utils';


export default class TimerScreen extends React.Component {
  constructor(props) {
    super(props);
    const { studyTime, breakTime } = props.route.params;
    this.state = {
      time: studyTime || 1500, // Default to 25 minutes if no time passed
      breakTime: breakTime || 300, // Default to 5 minutes if no break time passed
      timerRunning: false,
      timerLabel: 'Work Time',
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
    const { timerLabel } = this.state;
    if (timerLabel === 'Work Time') {
      this.setState({ time: 300, timerLabel: 'Break Time' }); // 5-minute break
    } else {
      this.setState({ time: 1500, timerLabel: 'Work Time' }); // 25-minute work session
    }
  };

  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
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
        <Button title="Reset" onPress={() => this.setState({ time: 1500, timerLabel: 'Work Time' })} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 24,
    marginBottom: 20,
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});
