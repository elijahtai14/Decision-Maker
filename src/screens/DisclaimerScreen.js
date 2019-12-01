import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import global from '../../global.js';

export default class DisclaimerScreen extends React.Component {
    render() {
        return (
          <SafeAreaView style= {{
              flex: 1, 
              backgroundColor: GLOBAL.GRAY,
              }}>

                <View  style= {{flex: 1, backgroundColor: GLOBAL.RED, padding: 30, margin: 30, alignItems: "center", justifyContent: "space-evenly"}}>
                    <Text style = {styles.header}>  DISCLAIMER </Text>

                    <Text style = {styles.text}>  
{"all suggestions are randomly generated - we do not endorse or take responsibility\
 for the result of any decision made from the use of this app"}
                    </Text>
                

                <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("DashboardScreen")}}>
                    <Image
                        resizeMode = 'stretch'
                        style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                        source={{uri: GLOBAL.DISCLAIMERSCREENSTART}}
                    />    
                </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
      }

    componentDidMount ()
    {
        console.log("Screen: Disclaimer Screen");
    }
  }

const styles = StyleSheet.create({
    header: {
        fontFamily: "Agency FB",
        fontSize: 40,
        color: "#000000"
    },
    text: {
        fontFamily: "Agency FB",
        fontSize: 22,
        color: "#ffffff",
        textAlign: "right",
    },
});