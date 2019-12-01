import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import global from '../../global.js';

export default class InfoScreen extends React.Component {
    render() {
        return (
          <SafeAreaView style= {{
              flex: 1, 
              backgroundColor: GLOBAL.YELLOW,
              }}>
                <View style= {{flex: 1, margin: 50, alignItems: "center", justifyContent: "space-around"}}>
                  
                    <Text style = {styles.header}>  INFO </Text>

                    <Text style = {styles.text}>  
{"The goal of this app is to aid in decision making;\
 we fuss over too many small decisions, leaving us with too little energy to\
 focus on decisions that matter."} 
                    </Text>

                    <Text style = {styles.text}>  
{"This idea inspired by decision fatigue: the\
 psychological term related to the Freudian hypothesis that the process of\
 making decisions itself involves significant energy."}
                    </Text>

                    <Text style = {styles.text}>  
{"There is a lot of research in this area, but if\
 you’d like to learn more, then"}
                    <Text style = {styles.link} onPress={() => 
                    Linking.openURL("https://www.nytimes.com/2011/08/21/magazine/do-you-suffer-from-decision-fatigue.html")}>
{" this article by the New York Times"} 
                    </Text>
                    <Text style= {styles.text}>
{" is a good place to start."}
                    </Text>
                    </Text>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.goBack()}}>
                        <Image
                            resizeMode = 'stretch'
                            style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                            source={{uri: GLOBAL.INFOSCREENBACK}}
                        />    
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
            
        );
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
    link: {
        fontFamily: "Agency FB",
        fontSize: 22,
        color: GLOBAL.BLUE,
        textDecorationLine: "underline",
    },
});