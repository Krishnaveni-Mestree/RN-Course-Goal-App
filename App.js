import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText,setEnteredGoalText]=useState('');
  const [courseGoals,setCourseGoals]=useState([]);

  function goalInputHandler(enteredText){
    //console.log(enteredText);
    setEnteredGoalText(enteredText)
  };

  function addGoalHandler(){
    //console.log(enteredGoalText);
    //setCourseGoals([...courseGoals,enteredGoalText]) //this is not bestway of updating state 
    setCourseGoals((currentCourseGoals)=>[
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    //If your new state depends on the previous state, 
    // a better way of updating is to pass a function to this state updating function,
    //a function which will be called automatically by React then derive the new state.
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
        {
          courseGoals.map((goal,i)=><Text key={i}>{goal}</Text>)
        }
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
    flex:4,
  }

});
