import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import global from '../../global.js'; 

export default class DashboardScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style= {{
                flex: 1, 
                flexDirection: "column",
                backgroundColor: GLOBAL.GRAY,
                }}>
                
                <View style={{flex: 3, flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("RestaurantPickerScreen")}} style={{alignItems: "center", justifyContent: "space-around"}}>
                        <Image
                            resizeMode = 'stretch'
                            style={{width: GLOBAL.WIDTH, height: GLOBAL.WIDTH}}
                            source={{uri: GLOBAL.DASHBOARDSCREENFOOD}}
                        />  
                    </TouchableOpacity>          
                </View> 
                <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("HomeScreen")}} style={{alignItems: "center", justifyContent: "space-around"}}>
                        <Image
                            resizeMode = 'stretch'
                            style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                            source={{uri: GLOBAL.DASHBOARDSCREENBACK}}
                        />    
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("DashboardScreen2")}} style={{alignItems: "center", justifyContent: "space-around"}}>
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
          console.log("Screen: Dashboard Screen");
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