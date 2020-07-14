import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.goalsForm}>
        <TextInput style={styles.input} placeholder="Add goals here..." />
        <TouchableOpacity>
          <View style={styles.addButton}>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  goalsForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 1.5,
    padding: 10,
    width: '70%'
  },
  addButton: {
    marginLeft: 30,
    backgroundColor: '#7b1fa2',
    width: 70,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fafafa'
  }
});
