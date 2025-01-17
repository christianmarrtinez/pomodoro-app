import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

const MenuScreen = ({ navigation }) => (
  <View style={styles.menuContainer}>
    <Image source={require('../assets/icon.png')} style={styles.icon} />
    <Button
      title="Create Session"
      onPress={() => navigation.navigate('CreateSession')}
    />
  </View>
);

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default MenuScreen;
