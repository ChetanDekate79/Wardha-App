// Assuming you have already created ReportComponent and GraphComponent

import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Report from './Report';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const BottomBar = ({ navigation }) => {
  const goToReport = () => {
    // Navigate to the ReportComponent
    navigation.navigate(Report);
  };

  const goToGraph = () => {
    // Navigate to the GraphComponent
    navigation.navigate('Graph');
  };

  return (
    <View style={styles.container}>
        <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.iconContainer} onPress={goToReport}>
        <Image source={require('../../assets/hostel.png')} style={styles.icon} />
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.centerButton} onPress={() => console.log('Center Button Pressed')}>
        <Text>Center</Text>
      </TouchableOpacity> */}

<Button
  title="Custom Button"
  type="outline"
  buttonStyle={{ borderColor: 'red' }}
  titleStyle={{ color: 'red' }}
  onPress={() => console.log('Custom button pressed')}
/>


      <TouchableOpacity style={styles.iconContainer} onPress={goToGraph}>
        <Image source={require('../../assets/bill.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>

    </View>
  );
};

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column-reverse',
        width: "100vw"
      },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ccc', // Set your desired background color
    padding: 10,
  },
  iconContainer: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  centerButton: {
    backgroundColor: 'blue', // Set your desired button color
    padding: 10,
    borderRadius: 5,
  },
};

export default BottomBar;
