# Project 1 - Pomodoro Timer

The **Pomodoro Timer** app will help users manage their work and break cycles using the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique). The app will have the following features:

- A timer that switches between work and break intervals
- Vibration alerts to notify users when it's time to take a break or resume work


Feel free to customize the aesthetic design of the app, but functionality should remain intact.

## Core Features
- **Countdown Timer:** The app should display the countdown in minutes and seconds.
- **Timer Controls:** Users can start, stop, and reset the timer.
- **Vibration Alerts:** The phone should vibrate at the end of each interval.
- **Interval Switching:** The timer should toggle between 25 minutes (work session) and 5 minutes (break session).

- create menu page with create session button
- create follow up page that has
  -- 3 buttons for study timer (20 min , 25 min, 30 min) + set custom session timer 
  -- 3 buttons for break (5 min, 10 min, 15 min) + set custom break timer 
  -- "start session" button that only works when study and break times are assigned and brings you to the timer page wth start/stop and reset buttons


### Optional Challenge
- Allow users to customize the timer's work and break durations (e.g., 10-minute work sessions and 5-minute breaks).

## Getting Started

### Prerequisites
Before diving into the development, make sure you have the necessary tools installed:

1. **Expo CLI:** Make sure you have the latest version of Expo installed. You can install Expo CLI via NPM:

    ```bash
    npm install -g expo-cli
    ```

2. **Node.js & npm:** Ensure you have Node.js and npm installed. Run the following commands to check:

    ```bash
    node --version
    npm --version
    ```

    If these are not installed, download and install them from the [Node.js website](https://nodejs.org/).

3. **Expo Go App:** You’ll need the Expo Go app on your mobile device to view the app during development. Download it from [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) (Android) or the [App Store](https://apps.apple.com/us/app/expo-go/id982107779) (iOS).

### Setting Up the Project

1. **Clone or Download the Repo:**
   If you haven't already, clone or download the repository where this README file is located.

2. **Install Dependencies:**
   Navigate to the project directory and install the necessary dependencies:

    ```bash
    cd <project-directory>
    npm install
    ```

   This will install `expo`, `react`, `react-native`, and any other required libraries.

3. **Start the Project:**
   You can start the app using the Expo CLI:

    ```bash
    expo start
    ```

   Once the project is running, you’ll see a QR code in the terminal. Scan it using the Expo Go app on your phone to see the app in action. Alternatively, you can run it in an iOS or Android simulator.

### Key Libraries and Usage
- **Expo:** Used to manage the development environment and handle native functionality like vibration.
- **React Native:** Provides the framework for building the mobile UI.
- **Prop-Types:** To ensure proper data validation for props passed between components.

For the vibration functionality, you can use Expo's built-in `Vibration` module. For example, to make the phone vibrate at the end of the Pomodoro cycle:

```javascript
import * as Vibration from 'expo-haptics';

// Causes the phone to vibrate
Vibration.vibrate();
