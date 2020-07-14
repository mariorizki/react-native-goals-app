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
    if (enteredGoal !== '') {
      setGoals(currentGoals => [...currentGoals, enteredGoal]);
      setEnteredGoal('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.goalsForm}>
        <TextInput
          style={styles.input}
          placeholder="Add goals here..."
          value={enteredGoal}
          onChangeText={goalInputHandler}
          onSubmitEditing={addGoalHandler}
        />
        <TouchableOpacity onPress={addGoalHandler}>
          <View style={styles.addButton}>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.goalContainer}>
        {goals.map(goal => (
          <View style={styles.goal} key={goal}>
            <Text>{goal}</Text>
          </View>
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
    backgroundColor: '#ac80a0',
    width: 70,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fafafa'
  },
  goalContainer: {
    marginTop: 30
  },
  goal: {
    backgroundColor: '#fff',
    elevation: 3,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10
  }
});
