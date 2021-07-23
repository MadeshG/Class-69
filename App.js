import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import{createBottomTabNavigator}from 'react-navigation-tabs'
import IssueScreen from './Screens/IssueScreen';
import SearchScreen from './Screens/searchScreen';
export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const TabNavigator=createBottomTabNavigator({
  Issue:{screen:IssueScreen},
  search:{screen:SearchScreen}
})
const AppContainer=createAppContainer(TabNavigator)