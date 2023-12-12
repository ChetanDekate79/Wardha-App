import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Graph from './graph';
import Report from './Report';
import { View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import GraphComponent from './GraphComponent';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Screen2">
          <Tab.Screen
            name="Screen1"
            component={Report}
            options={{
              tabBarLabel: 'Screen 1',
              tabBarIcon: ({ color, size }) => (
                <Feather name="activity" size={size} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="Screen2"
            component={() => (
              <TouchableOpacity onPress={toggleModal}>
                <View style={styles.buttonContainer}>
                 <GraphComponent/>
                </View>
              </TouchableOpacity>
            )}
            options={{
              tabBarLabel: 'Screen 2',
              tabBarIcon: ({ color, size }) => (
                <Feather name="select" size={size} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="Screen3"
            component={Graph}
            options={{
              tabBarLabel: 'Screen 3',
              tabBarIcon: ({ color, size }) => (
                <Feather name="settings" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        {/* Content of your popup goes here */}
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={toggleModal}>
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>
          {/* Add your parameter component here */}
          <Graph />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    borderRadius: 25,
    backgroundColor: 'blue',
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabNavigator;
