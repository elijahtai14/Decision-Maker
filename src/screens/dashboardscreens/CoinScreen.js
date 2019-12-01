import React, { Component } from 'react';
 import { Vibration, StyleSheet, View, Text, TouchableOpacity, Image, Animated, SafeAreaView, Slider} from 'react-native';


export default class CoinScreen extends Component 
{
 
    constructor(props){
        super(props);
        this.state= {
          img: [GLOBAL.COINSCREENDEFAULT, GLOBAL.COINSCREENDEFAULT, GLOBAL.COINSCREENDEFAULT, GLOBAL.COINSCREENDEFAULT],
          numCoins: 1,
        }
    }
    
    setImage = (n) => {
      var current = this.state.img;
      if (Math.random() >= 0.5) {
        current[n - 1] = GLOBAL.COINSCREENHEADS;
        this.setState({
          img: current,
        })
      } else {
        current[n - 1] = GLOBAL.COINSCREENTAILS;
        this.setState({
          img: current,
        })
      }
    }
    

    generateElements = (numCoins) => {
      // Make an sequence array [1, 2, 3, ... numCoins]
      const seq = Array.from(new Array(numCoins),(val,index)=>index+1);

      // Make a mapping of the sequences
      const elements = seq.map((number, index) => {
        return (
          <TouchableOpacity 
            onPress = {()=>{this.setImage(index + 1); Vibration.vibrate([0, 50, 5, 20]);}}
            key = {index}
          >

            <Image
              resizeMode = 'stretch'
              style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/2 - 20}}
              source={{uri: this.state.img[index]}}
            />    

          </TouchableOpacity>
        );

      });
      return elements;
    }


    render() { 
      return (
        <SafeAreaView
          style={{
            flex: 1, 
            flexDirection: 'column', 
            backgroundColor: GLOBAL.GRAY,
            alignItems: 'center',
            justifyContent: 'space-around'
          }}>

            <Slider
              value = {1}
              style={{ width: GLOBAL.WIDTH - 40, 
                       paddingVertical: 10,
                       margin: 20,
                       backgroundColor: GLOBAL.YELLOW,
                    }}
              step={1}
              minimumValue={1}
              maximumValue={4}
              value={this.state.age}
              onSlidingComplete={val => {this.setState({numCoins: val});}}
              minimumTrackTintColor={GLOBAL.RED}
              maximumTrackTintColor={GLOBAL.GRAY}
              thumbTintColor={GLOBAL.RED}
            />

            <View style={{
              flex: 1,
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>

              {this.generateElements(this.state.numCoins)}

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
                            source={{uri: GLOBAL.COINSCREENBACK}}
                        />    
              </TouchableOpacity>

              <TouchableOpacity 
                onPress = {()=>{
                  this.setImage(1);
                  this.setImage(2);
                  this.setImage(3);
                  this.setImage(4);
                  Vibration.vibrate([0, 50, 5, 20]);
                }} 
                style={{alignItems: "center", justifyContent: "center"}}>

                <Image
                    resizeMode = 'stretch'
                    style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                    source={{uri: GLOBAL.COINSCREENFLIP}}
                />    
                
              </TouchableOpacity>
            </View>
          </View>

        </SafeAreaView>
      );
}}