import React from 'react';
import { Vibration, Animated, View, Easing, Image, SafeAreaView, TouchableOpacity} from 'react-native';

export default class FadeInView extends React.Component {
  state = {
    // The animated variable, starting at 0 rotation
    ticker: new Animated.Value(0),
    angle: 360,
  }

  // Start an animation to rotate the view
  startAnimation = () => {
      // Start at 0
      this.state.ticker.setValue(0);

      // Get the angle (0 + [360-720])
      this.setState({angle: Math.floor(Math.random() * 360) + 1 + 720})

      // Animate to angle
      Animated.timing(
          this.state.ticker,
          {
              easing: Easing.bezier(0.23, 1, 0.32, 1),
              toValue: this.state.angle,
              duration: 3000,
          }
      ).start();
  }

  render() {
    return ( 
        <SafeAreaView style = {{backgroundColor: GLOBAL.BLUE, flex: 1}}>
            <View
                style={{
                    width: GLOBAL.WIDTH, 
                    height: GLOBAL.WIDTH,
                    justifyContent: 'center',
                    alignItems: 'center',  
                }}>   
            
                <Image source={{uri: GLOBAL.SPINNERSCREENCOMPASS}} style={{width: GLOBAL.WIDTH, height: GLOBAL.WIDTH}} />

                <Animated.View
                    style={{
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // Animate from angle degrees to nextAngle degrees
                        transform: [{ rotate: this.state.ticker.interpolate({
                            inputRange: [0, this.state.angle],
                            outputRange: ['0deg', this.state.angle.toString().concat('deg')], 
                        })}]
                    }}
                >
                    <TouchableOpacity onPress={()=>{this.startAnimation(); Vibration.vibrate([0, 50, 5, 20]);}}>
                        <Image
                                        resizeMode = 'stretch'
                                        style={{width: GLOBAL.WIDTH/(3.64*1.5), height: GLOBAL.WIDTH/1.5}}
                                        source={{uri: GLOBAL.SPINNERSCREENSPINNER}}
                        />    
                    </TouchableOpacity>

                </Animated.View>
            </View>
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                <TouchableOpacity onPress = {()=>{this.props.navigation.goBack()}} style={{alignItems: "center", justifyContent: "center"}}>
                    <Image
                        resizeMode = 'stretch'
                        style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                        source={{uri: GLOBAL.SPINNERSCREENBACK}}
                    />    
                </TouchableOpacity>
            </View>
         </SafeAreaView>
    );
  }
}