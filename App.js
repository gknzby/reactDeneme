import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button} from 'react-native';
import { } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './Pages/LoginPage.js'
import HomePage from './Pages/HomePage.js'
import ExerciseDay from './Pages/ExerciseDay.js'
import Exercises from './Pages/Exercises.js'
import DietDay from './Pages/DietDay.js';
import NavBar from './Pages/NavBar.js';
import Diets from './Pages/Diets.js';

const Stack = createStackNavigator();

class App extends Component
{
  render()
  {
    
    return (
      <>
        <NavBar/>
        <Diets id = 'exID'/>
      </>

    );
  }
}


export default App;