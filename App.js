import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.goalsForm}>
        <TextInput
          style={styles.input}
          placeholder="Add goals here..."
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <TouchableOpacity onPress={addGoalHandler}>
          <View style={styles.addButton}>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        {goals.map(goal => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
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
