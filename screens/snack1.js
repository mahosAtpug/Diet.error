import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "../screens/dietPlanner"
import firebase from "firebase";
import db from "../config"
import {Header , Icon} from "react-native-elements"


export default class Breakfast1 extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                                <Header  
                                leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
                                centerComponent={{ text:" Spice Roasted Mixed Nuts ", style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#73B8C7"
                                />                

                <View>
                <Text style={{color:"white" , marginLeft:100}}>
                       Serves: 4
                       {"\n"}
                       Time: 20-30 mins
                       {"\n"}
                       Difficulty: Intermediate   
                       {"\n"}    
                   </Text>
                </View>

                <View>
                <Text style={{color:"white" , marginLeft:100}}>
                       Ingredients:
                       </Text>
                       <View style={{marginRight:600 , alignItems:"center"}}>

                       <Text style={styles.text}>

                        2 teaspoons PEANUTS WITH SKIN  
                                    {"\n"}
                                    2 teaspoons OIL  
                                    {"\n"}
                                    2 teaspoons JAGGERY
                                    {"\n"}
                                    8 ALMONDS
                                    {"\n"}
                                    16 CASHEWS (2 piece split)  
                                    {"\n"}
                                    1 teaspoon CINNAMON POWDER
                                    {"\n"}
                                    1 teaspoon ROSEMARY
                                    {"\n"}

                   </Text>
                </View>
                </View>

                <View>
                <Text style={{color:"white" , marginLeft:100}}>
                       Steps: 
                       </Text>
                       <View style={{marginLeft:230}}>

                       <Text style={styles.text}>

                        1. Soak CHIA SEEDS in a bowl for 7-10 mins.
                        {"\n"}

                              2. In a blender add chopped DATES , sliced BANANAS, MANGO PUREE soaked CHIA SEEDS, WATER and then blend.
                             
                              {"\n"}
                               3. Pour it in a Glass and Serve Chilled
                               {"\n"}

                              4.Your healthy meal is Ready!!
                                   
                   </Text>
                </View>
                </View>

                <View style={{marginLeft:20 , alignItems:"center"}}>
                <Text style={{color:"white" , marginLeft:100}}>
                       I hope you had fun in making the dish. Enjoy the meal!
                                   
                   </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#207FA1',
        
      },
      text:{
        color:"white"
    }
})
    

