import React from 'react';
import { Vibration, Platform, View, Image, StyleSheet, SafeAreaView, TouchableOpacity, Slider, Text, Linking} from 'react-native';
//import Geolocation from 'react-native-geolocation-service';

export default class RestaurantPickerScreen extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            options: [],
            item: {name: "Gathering Location ... ", formatted_address: ""},
            location: {coords: {longitude: 0,latitude: 0,}},
            cost: 4,
            distance: 2000,
            buttonDisabled: true,
        }
    }

    componentWillMount (){
        this.findCoordinates()
    }

    // Gets a random element from options, calls all the functions below
    generateRandomItem = async () => {
        //this.findCoordinates();
        await this.getRestaurantList();

        if (this.state.options.length <= 0){
            this.setState({item: {name: "Zero Results Found", formatted_address: ""}})
        }
        else
        {
            var item = this.state.options[Math.floor(Math.random()*this.state.options.length)];
            console.log(JSON.stringify(item));
            this.setState({item: item});
            console.log(this.state.location);
        }

    this.setState({buttonDisabled: false});
    Vibration.vibrate([0, 50, 5, 20]);
    }

    // Gets the users coordinates
    findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
                this.setState({ location: position });
                this.setState({ buttonDisabled: false});
                this.setState({item: {name: "Click to Generate a Random Restaurant", formatted_address: ""}})
			},
			error => {console.log(error.message)},
			{ enableHighAccuracy: false, timeout: 20000}
		);
	};

    // Updates the options via a fetch to Heroku server
    getRestaurantList = async () => {
        var requestText = "https://elijahtai.herokuapp.com/getrestaurants/"
        requestText = requestText + this.state.location.coords.latitude + "," + this.state.location.coords.longitude + "/"
        requestText = requestText + this.state.distance + "/"
        requestText = requestText + this.state.cost

        await fetch(requestText, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          return response.json()
        })
        .then((response) => {
            console.log(response);
            this.setState({options: JSON.parse(response)})
            //console.log(typeof(JSON.parse(response)));
        })
        .catch((error) => {
           console.error(error);
        });
      }

    render() {
        return (
            <SafeAreaView style= {{
                flex: 1, 
                flexDirection: "column",
                backgroundColor: GLOBAL.GRAY,
                alignItems: "center",
            }}>

                <View style = {{flex: 1}}> 
                    <View style = {{flexDirection: "row", alignItems: "center"}}>
                        <Slider
                        value = {2000}
                        style={{ width: GLOBAL.WIDTH - 140, 
                                paddingVertical: 10,
                                margin: 10,
                                backgroundColor: GLOBAL.YELLOW,
                                }}
                        step={100}
                        minimumValue={500}
                        maximumValue={5000}
                        onValueChange={val => {this.setState({distance: val});}}
                        minimumTrackTintColor={GLOBAL.RED}
                        maximumTrackTintColor={GLOBAL.GRAY}
                        thumbTintColor={GLOBAL.RED}
                        />

                        <Text style = {styles.minitext}>{"Distance (m): " + this.state.distance}</Text>
                    </View>
                    
                    <View style = {{flexDirection: "row", alignItems: "center"}}>
                        <Slider
                        value = {4}
                        style={{ width: GLOBAL.WIDTH - 140, 
                                paddingVertical: 10,
                                margin: 10,
                                backgroundColor: GLOBAL.YELLOW,
                                }}
                        step={1}
                        minimumValue={1}
                        maximumValue={4}
                        onValueChange={val => {this.setState({cost: val});}}
                        minimumTrackTintColor={GLOBAL.RED}
                        maximumTrackTintColor={GLOBAL.GRAY}
                        thumbTintColor={GLOBAL.RED}
                        />

                        <Text style = {styles.minitext}>{"Cost (1-4): " + this.state.cost}</Text>
                       
                    </View>

                    <Text style = {styles.minitext}>{"Longitude & Latitude : " + Number((this.state.location.coords.longitude).toFixed(5)) + " & " +  Number((this.state.location.coords.latitude).toFixed(5))}</Text>
                    
                    <View style = {{flex: 1, marginTop: 30, paddingVertical: 20, paddingHorizontal: 8, width: GLOBAL.WIDTH, backgroundColor: GLOBAL.GREEN, alignSelf: "stretch", justifyContent: "space-around"}}>
                        <Text style = {styles.header}>{this.state.item.name}</Text>
                        <Text style = {styles.text}>{this.state.item.formatted_address}</Text>
                        <Text style = {styles.text}>{"Rating: "+this.state.item.rating}</Text>
                        <Text style = {styles.text}>{"Price Level: "+this.state.item.price_level}</Text>
                        {this.state.item.price_level && <Text style={styles.link} onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query='+this.state.item.name +" "+this.state.item.formatted_address)}> View Location </Text>}

                    </View>

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
                                    source={{uri: GLOBAL.RESTAURANTSCREENBACK}}
                                />    
                        </TouchableOpacity>

                        <TouchableOpacity onPress = {() => {this.setState({buttonDisabled: true}); this.generateRandomItem();}} disabled = {this.state.buttonDisabled} style={{alignItems: "center", justifyContent: "center"}}>
                        <Image
                            resizeMode = 'stretch'
                            style={{width: GLOBAL.WIDTH/2 - 20, height: GLOBAL.WIDTH/4 - 10}}
                            source={{uri: GLOBAL.RESTAURANTSCREENFOOD}}
                        />
                        
                        </TouchableOpacity>
                    </View>
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
    minitext: {
        fontFamily: "Agency FB",
        fontSize: 14,
        color: "#ffffff",
        textAlign: "right",
    },
    link: {
        fontFamily: "Agency FB",
        fontSize: 22,
        textDecorationLine: "underline",
        color: "blue",
        textAlign: "right",
    },
});