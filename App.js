
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/carItems';




export default function App() {
  return (
    <View style={styles.container}>
      <CarItem name={'Model X'}
      tagLine={'Order online for'}
      tagLineCTA={'Touchless Delivery'}
      image={require('./assets/images/ModelX.jpeg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
