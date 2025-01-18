import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { vibrate } from '../utils';

export default class TimerScreen extends React.Component {
  constructor(props) {
    super(props);

    const { route } = props;
    const { studyTime, breakTime } = route.params;

    this.state = {
      time: studyTime,
      timerRunning: false,
      timerLabel: 'Work Time',
      studyTime,
      breakTime,
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
      vibrate();
      this.switchTimer();
    } else {
      this.setState({ time: time - 1 });
    }
  };

  switchTimer = () => {
    const { timerLabel, studyTime, breakTime } = this.state;
    if (timerLabel === 'Work Time') {
      this.setState({ time: breakTime, timerLabel: 'Break Time' });
    } else {
      this.setState({ time: studyTime, timerLabel: 'Work Time' });
    }
  };

  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  resetTimer = () => {
    const { timerLabel, studyTime, breakTime } = this.state;
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
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={this.toggleTimer}
          >
            <Text style={styles.customButtonText}>
              {timerRunning ? 'Stop' : 'Start'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.customButton} onPress={this.resetTimer}>
            <Text style={styles.customButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b51ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '60%',
  },
  customButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  customButtonText: {
    color: '#8b51ff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
