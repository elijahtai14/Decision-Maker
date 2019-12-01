import React from 'react';
import {Vibration, Text, View, SafeAreaView, TouchableOpacity, Image, Slider, StyleSheet} from 'react-native';

export default class RNGScreen extends React.Component {

    constructor(props){
        super(props);
        this.state= {
          bound: 10,
          number: 0,
        }
    }

    generateRandomNumber = () => {
        this.setState({number: Math.round(Math.random() * this.state.bound), bound: this.state.bound});
        Vibration.vibrate([0, 50, 5, 20]);
    }

    render() {
        return (
        <SafeAreaView style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: GLOBAL.GRAY,}}>
            
            <Slider
              value = {10}
              style={{ width: GLOBAL.WIDTH - 40, 
                       paddingVertical: 10,
                       margin: 20,
                       backgroundColor: GLOBAL.YELLOW,
                    }}
              step={1}
              minimumValue={0}
              maximumValue={100}
              onValueChange={val => {this.setState({bound: val});}}
              minimumTrackTintColor={GLOBAL.RED}
              maximumTrackTintColor={GLOBAL.GRAY}
              thumbTintColor={GLOBAL.RED}
            />

            <Text style = {styles.text}>{this.state.bound}</Text>

            <View style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
                <TouchableOpacity onPress = {() => {this.generateRandomNumber()}}>
                    <Text style = {styles.header}>{this.state.number}</Text>
                </TouchableOpacity>
            </View>

            <View style = {{height: GLOBAL.HEIGHT/4, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{
                    width: GLOBAL.WIDTH,
                    flexDirection: 'row',
                    justifyContent: "space-around", 
                }}>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.goBack()}} style={{alignItems: "center", justifyContent: "center"}}>
                            <Image
                                resizeMode = 'stretch'
                                style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                                source={{uri: GLOBAL.RNGSCREENBACK}}
                            />    
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => {this.generateRandomNumber()}} style={{alignItems: "center", justifyContent: "center"}}>
                    <Image
                        resizeMode = 'stretch'
                        style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                        source={{uri: GLOBAL.RNGSCREENGENERATE}}
                    />    
                    
                    </TouchableOpacity>
                </View>
          </View>
            
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontFamily: "Agency FB",
        fontSize: 200,
        color: "#000000"
    },
    text: {
        fontFamily: "Agency FB",
        fontSize: 40,
        color: "#ffffff",
        textAlign: "right",
    },
});