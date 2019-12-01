import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen             from './src/screens/HomeScreen'

import DisclaimerScreen       from './src/screens/DisclaimerScreen'
import InfoScreen             from './src/screens/InfoScreen'

import DashboardScreen        from './src/screens/DashboardScreen'
import DashboardScreen2       from './src/screens/DashboardScreen2'

// Dashboard Options
import RestaurantPickerScreen from './src/screens/dashboardscreens/RestaurantPickerScreen'

import OptionPickerScreen     from './src/screens/dashboardscreens/OptionPickerScreen'
import RNGScreen              from './src/screens/dashboardscreens/RNGScreen'
import DiceScreen             from './src/screens/dashboardscreens/DiceScreen'
import CoinScreen             from './src/screens/dashboardscreens/CoinScreen'
import SpinnerScreen          from './src/screens/dashboardscreens/SpinnerScreen'
import QuestionScreen         from './src/screens/dashboardscreens/QuestionScreen'

// Deeper Level Pages (accessible from pages in the dashboard)
import AnswerScreen           from './src/screens/dashboardscreens/AnswerScreen'

// Define a navigation stack
const RootStack = createStackNavigator({
    HomeScreen: HomeScreen,

    DashboardScreen: DashboardScreen,
    DashboardScreen2: DashboardScreen2,
    InfoScreen: InfoScreen,

    DisclaimerScreen: DisclaimerScreen,

    RestaurantPickerScreen: RestaurantPickerScreen,

    OptionPickerScreen: OptionPickerScreen,
    RNGScreen: RNGScreen,
    DiceScreen: DiceScreen,
    CoinScreen: CoinScreen,
    SpinnerScreen: SpinnerScreen,
    QuestionScreen: QuestionScreen,

    AnswerScreen: AnswerScreen,
  },{
    // Go to HomeScreen first
    initialRouteName: 'HomeScreen',

    // Hide the navigation bar on top
    defaultNavigationOptions: {
      header: null,
    },
  },
);

// Create and render an app containter made from the navigation stack
const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}