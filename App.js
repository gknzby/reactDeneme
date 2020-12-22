import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button} from 'react-native';
import { } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import NavBar from './Pages/NavBar.js';
import AntExercises from './PagesA/AntExercises.js'
import ExerciseDay from './Pages/ExerciseDay.js'
import Activities from './Pages/Activities.js'

const Stack = createStackNavigator();

class App extends Component
{
  render()
  {
    
    return (
      <>
        <NavBar/>
        <Activities id="sdfsf"/>
        
      </>

    );
  }
}
//<ExerciseDay id="sdfsf"/>
//<Activities id="sdfsf"/>
export default App;