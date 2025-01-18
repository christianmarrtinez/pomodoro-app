import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MenuScreen = ({ navigation }) => (
  <View style={styles.menuContainer}>
    
    <Text style={styles.title}>Pomodoro Timer</Text>




    <Image source={require('../assets/icon.png')} style={styles.icon} />

    
    <TouchableOpacity
      style={styles.customButton}
      onPress={() => navigation.navigate('CreateSession')}
    >
      <Text style={styles.customButtonText}>Create Session</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8b51ff', 
  },
  icon: {
    width: 100, 
    height: 100, 
    marginBottom: 20, 
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#fff',
    marginBottom: 20, 
  },
  customButton: {
    backgroundColor: '#fff', 
    borderRadius: 25, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20, 
  },
  customButtonText: {
    color: '#8b51ff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MenuScreen;
