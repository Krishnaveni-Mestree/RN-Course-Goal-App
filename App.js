import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible,setModalIsVisible]=useState(false);
  const [courseGoals,setCourseGoals]=useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText){
    setCourseGoals((currentCourseGoals)=>[
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()}, //if we dont have key
    ]);
  };

  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals)=>{
      return currentCourseGoals.filter((goal)=>goal.id!==id); //You're using the .filter() method to create a new array that excludes the goal with the specified ID.
      //For each goal, it checks: "Is this goal's ID not equal to the one we want to delete?"
      //If it's not equal (true) → keep it.
      //If it's equal (false) → remove it.
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal' 
        color={'#5e0acc'}
        onPress={startAddGoalHandler}
      />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData)=>{
            return (
              <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
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
