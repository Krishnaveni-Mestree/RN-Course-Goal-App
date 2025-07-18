import React ,{useState}from "react";
import {View,TextInput,Button,StyleSheet,Modal,Image } from "react-native";

const GoalInput=(props)=>{
    const [enteredGoalText,setEnteredGoalText]=useState('');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText)
    };

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return(
        <Modal 
            visible={props.visible}
            animationType="slide"
        >
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput 
                    placeholder='Your course goal!'
                    style={styles.textInput} 
                    onChangeText={goalInputHandler} //we r not executing this function, just pointing(focusing) the inputfield
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color={'#f31282'}/>
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title="Add Goal"
                            onPress={addGoalHandler}
                            color={'#b180f0'}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles=StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',  
        alignItems:'center',
        padding:16,
        backgroundColor:'#311b6b'
    },
    textInput:{
        borderWidth:1,
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438',
        borderRadius:6,
        width:'100%',
        padding:16
    },
    buttonContainer:{
        marginTop:16,
        flexDirection:'row'
    },
    button:{
        width:'30%',
        marginHorizontal:8
    },
    image:{
        width:100,
        height:100,
        margin:20
    }
});

export default GoalInput;