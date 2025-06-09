import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View,FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals,setCourseGoals]=useState([]);

  function addGoalHandler(enteredGoalText){
    setCourseGoals((currentCourseGoals)=>[
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()}, //if we dont have key
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData)=>{
            return <GoalItem text={itemData.item.text}/>
          }}
          keyExtractor={(item,i)=>{
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    padding:50,
    paddingHorizontal:16,
  },
  goalsContainer:{
    flex:5,
  },
});
