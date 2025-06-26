import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View,FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText,setEnteredGoalText]=useState('');
  const [courseGoals,setCourseGoals]=useState([]);

  function goalInputHandler(enteredText){
    //console.log(enteredText);
    setEnteredGoalText(enteredText)
  };

  function addGoalHandler(){
    //console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals)=>[
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()}, //if we dont have key
    ]);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Your course goal!'
          style={styles.textInput} 
          onChangeText={goalInputHandler} //we r not executing this function, just pointing(focusing) the inputfield
        />
        <Button 
          title="Add Goal"
          onPress={addGoalHandler}
        />
      </View>
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
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',  
    alignItems:'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
    marginRight:8,
    padding:8
  },
  goalsContainer:{
    flex:5,
  },
});
