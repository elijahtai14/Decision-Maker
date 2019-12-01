import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, Image, StyleSheet, Slider, TextInput} from 'react-native';


export default class OptionPickerScreen extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            optionsText: "",
            item: "Type some options",
        }
    }

    generateRandomItem = () => {
        var optionsList = this.state.optionsText.split(",");
        var item = optionsList[Math.floor(Math.random()*optionsList.length)];
        this.setState({item: item});
    }

    render() {
        return (
        <SafeAreaView style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: GLOBAL.GRAY,}}>
            
            <Text style = {styles.text}> Type options separated by commas, then hit CHOOSE.</Text>

            <View style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                
                <TextInput
                    multiline
                    style={{height: GLOBAL.HEIGHT/2, width: GLOBAL.WIDTH, borderColor: 'gray', borderWidth: 1, fontFamily: "Agency FB", fontSize: 22}}
                    onChangeText={(text)=> {
                        this.setState({optionsText: text,})
                    }}
                    value={this.state.optionsText}
                />
            </View>

            <TouchableOpacity onPress = {() => {this.generateRandomItem()}}>
                <Text style = {styles.header}>{this.state.item}</Text>
            </TouchableOpacity>

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
                                source={{uri: GLOBAL.OPTIONSCREENBACK}}
                            />    
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => {this.generateRandomItem()}} style={{alignItems: "center", justifyContent: "center"}}>
                    <Image
                        resizeMode = 'stretch'
                        style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                        source={{uri: GLOBAL.OPTIONSCREENGENERATE}}
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
        fontSize: 40,
        color: "#000000"
    },
    text: {
        fontFamily: "Agency FB",
        fontSize: 22,
        color: "#ffffff",
        textAlign: "center",
    },
});