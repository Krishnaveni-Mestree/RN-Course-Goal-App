import React ,{useState}from "react";
import {View,TextInput,Button,StyleSheet } from "react-native";

const GoalInput=(props)=>{
    const [enteredGoalText,setEnteredGoalText]=useState('');

    function goalInputHandler(enteredText){
        //console.log(enteredText);
        setEnteredGoalText(enteredText)
    };

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder='Your course goal!'
                style={styles.textInput} 
                onChangeText={goalInputHandler} //we r not executing this function, just pointing(focusing) the inputfield
                value={enteredGoalText}
            />
        <Button 
          title="Add Goal"
          onPress={addGoalHandler}
        />
      </View>
    );
};

const styles=StyleSheet.create({
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
});

export default GoalInput;