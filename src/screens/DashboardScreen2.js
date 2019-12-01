import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import global from '../../global.js'; 

export default class DashboardScreen2 extends React.Component {
    render() {
        return (
            <SafeAreaView style= {{
                flex: 1, 
                flexDirection: "row",
                backgroundColor: GLOBAL.GRAY,
                }}>
                
                <View style={{flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("OptionPickerScreen")}} style={{alignItems: "center", justifyContent: "space-around"}}>
                        <Image
                            resizeMode = 'stretch'
                            style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                            source={{uri: GLOBAL.DASHBOARDSCREENOPTIONPICKER}}
                        />    
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("DiceScreen")}} style={{alignItems: "center", justifyContent: "space-around"}}>
                        <Image
                            resizeMode = 'stretch'
                            style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                            source={{uri: GLOBAL.DASHBOARDSCREENDICE}}
                        />    
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("SpinnerScreen")}} style={{alignItems: "center", justifyContent: "space-around"}}>
                        <Image
                            resizeMode = 'stretch'
                            style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                            source={{uri: GLOBAL.DASHBOARDSCREENSPINNER}}
                        />    
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("HomeScreen")}} style={{alignItems: "center", justifyContent: "space-around"}}>
                        <Image
                            resizeMode = 'stretch'
                            style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                            source={{uri: GLOBAL.DASHBOARDSCREENBACK}}
                        />    
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("RNGScreen")}} style={{alignItems: "center", justifyContent: "space-around"}}>
                        <Image
                            resizeMode = 'stretch'
                            style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                            source={{uri: GLOBAL.DASHBOARDSCREENRNG}}
                        />    
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("CoinScreen")}} style={{alignItems: "center", justifyContent: "space-around"}}>
                        <Image
                            resizeMode = 'stretch'
                            style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                            source={{uri: GLOBAL.DASHBOARDSCREENCOIN}}
                        />    
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("QuestionScreen")}} style={{alignItems: "center", justifyContent: "space-around"}}>
                        <Image
                            resizeMode = 'stretch'
                            style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                            source={{uri: GLOBAL.DASHBOARDSCREENQUESTION}}
                        />    
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("DashboardScreen")}} style={{alignItems: "center", justifyContent: "space-around"}}>
                        <Image
                            resizeMode = 'stretch'
                            style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                            source={{uri: GLOBAL.DASHBOARDSCREENNEXT}}
                        />    
                    </TouchableOpacity>
                </View>                
        
            </SafeAreaView>
        );
      }

      componentDidMount ()
      {
          console.log("Screen: Disclaimer Screen2");
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