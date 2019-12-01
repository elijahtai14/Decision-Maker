import React from 'react';
import {Vibration, Text, View, SafeAreaView, TouchableOpacity, Image, StyleSheet} from 'react-native';


const options = [
    {
        question: "Should I...",
        positiveAnswers: ["Of course you should!", "Do it and don't look back", "Do it."],
        negativeAnswers: ["No way!", "Why in the world would you do that?", "Of course not"],
    },
    {
        question: "Am I...",
        positiveAnswers: ["Yes, you are", "Yeah.", "You appear so..."],
        negativeAnswers: ["Nope.", "No, you aren't", "No"],
    },
    {
        question: "But what if...",
        positiveAnswers: ["That's a minor concern, brush it off", "Don't let that stop you!", "Do it. What's the worst that could happen"],
        negativeAnswers: ["Hmm...that's a valid concern. Don't do it", "Then don't.", "I suppose you should err on the side of caution then"],
    },
    {
        question: "When should I...",
        positiveAnswers: ["Now", "There's no time like the present!", "Promptly"],
        negativeAnswers: ["You should wait on that one...", "Maybe Later?", "Take your time", "Do it later, there's no rush"],
    },
    {
        question: "Is...",
        positiveAnswers: ["Yup", "Yes", "Sounds like it to me!"],
        negativeAnswers: ["Nope", "No", "False", "Not really"],
    },
]


export default class QuestionScreen extends React.Component {

    getRandomElement = (arr) => {
        Vibration.vibrate([0, 50, 5, 20]);
        return (arr[Math.floor(Math.random()*arr.length)]);
        
    }
    
    renderOptions = () => {
        return (options.map((entry, uniquekey) =>{
            return (
                <TouchableOpacity
                    key = {uniquekey}
                    onPress = {
                        ()=>{
                                this.navigateProps(
                                    this.getRandomElement(entry.positiveAnswers), 
                                    this.getRandomElement(entry.negativeAnswers)
                                );
                            }
                    }        
                    style = {styles.text}        
                >
                    <Text 
                        key = {uniquekey} 
                        style = {styles.text}
                    >
                            
                        {entry.question} 

                    </Text>
                </TouchableOpacity>
            ) 
        })
       )
    }

    navigateProps = (pos, neg) => {
        // Positive Response
        if (Math.random() > 0.5){
            this.props.navigation.navigate("AnswerScreen",
            {
                type: 'pos',
                message: pos, 
            })
        }
        // Negative Response
        else {
            this.props.navigation.navigate("AnswerScreen",
                {
                    type: 'neg',
                    message: neg, 
                }
            )
        }
     }

    render() {
        return (
        <SafeAreaView style = {{flex: 1, justifyContent: 'space-around', alignItems: 'stretch', backgroundColor: GLOBAL.BLUE}}>
            {this.renderOptions()}
            <TouchableOpacity onPress = {()=>{this.props.navigation.goBack()}} style={{flex: 2, alignItems: "center", justifyContent: "center"}}>
                    <Image
                        resizeMode = 'stretch'
                        style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                        source={{uri: GLOBAL.SPINNERSCREENBACK}}
                    />    
            </TouchableOpacity>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        fontFamily: "Agency FB",
        fontSize: 22,
        color: "#ffffff",
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: GLOBAL.GREEN,
        margin: 10,
    },
});