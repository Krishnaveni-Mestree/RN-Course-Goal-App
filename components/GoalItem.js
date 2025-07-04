import React from "react";
import { View,Text,StyleSheet, Pressable } from "react-native";

const GoalItem=(props)=>{
    return(
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{color:'#210644'}}
                onPress={props.onDeleteItem.bind(this,props.id)}
                style={(pressed)=>pressed && styles.pressedItem}
            > 
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </Pressable>
        </View>
    );
};

const styles=StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius:6,
        backgroundColor:'#5e0acc',
    },
    goalText:{
        padding:8, //for inside ripple_effect have to show 
        color:'white',
    },
    pressedItem:{
        opacity:1,
    }
})

export default GoalItem;