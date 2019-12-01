import React from 'react';
import { View, Image, Dimensions, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import global from '../../global.js';

export default class HomeScreen extends React.Component {
    render() {
      return (

        <SafeAreaView style= {{flex: 1, backgroundColor: GLOBAL.BLUE}}>
                
                <Image
                     resizeMode = 'stretch'
                     style={{width: GLOBAL.WIDTH, height: GLOBAL.WIDTH}}
                     source={{uri: GLOBAL.HOMESCREENLOGO}}
                />

                <View style= {{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                   
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('DisclaimerScreen')}}>
                    <Image
                        resizeMode = 'stretch'
                        style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                        source={{uri: GLOBAL.HOMESCREENSTART}}
                    />
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('InfoScreen')}}>
                        <Image
                            resizeMode = 'stretch'
                            style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                            source={{uri: GLOBAL.HOMESCREENINFO}}
                        />    
                    </TouchableOpacity>
               
                </View>
      </SafeAreaView>
      );
    }
  }
  