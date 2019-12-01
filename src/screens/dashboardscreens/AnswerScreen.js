import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default class AnswerScreen extends React.Component {

    getBackgroundColor = () => {
        if (this.props.navigation.getParam('type') == 'pos') {
            return GLOBAL.GREEN
        } else {
            return GLOBAL.RED
        }
    }
    render() {
        return (
        <SafeAreaView style = {{
            flex: 1, 
            justifyContent: 'space-around',
            alignItems: 'stretch',
            backgroundColor: this.getBackgroundColor(),
        }}>
            <TouchableOpacity onPress = {()=>{this.props.navigation.goBack()}} style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                   <Text style = {styles.text}>
                    {
                      this.props.navigation.getParam('message')
                    }
                   </Text>
            </TouchableOpacity>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Agency FB",
        fontSize: 64,
        color: "#ffffff",
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: GLOBAL.GRAY,
        margin: 10,
        padding: 10,
    },
});