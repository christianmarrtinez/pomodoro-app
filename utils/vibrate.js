import { Vibration } from 'react-native';

export default () => Vibration.vibrate([500, 500, 500]); // Vibrates in 500ms intervals, 3 times.
