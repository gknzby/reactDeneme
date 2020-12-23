import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button, Alert} from 'react-native';
import { } from 'react-native';

class Walking extends Component{
    render() {
        return (
            <View style = {styles.activityButtons}>
                <Text>walking</Text>
            </View>
        );
     }
}

class Running extends Component{
    render() {
        return (
        <View style = {styles.activityButtons}>
            <Text>Running</Text>
        </View>
        );
     }
}

class Cycling extends Component{
    render() {
        return (
           <View style = {styles.activityButtons}>
              <Text>Cycling</Text>
           </View>
        );
     }
}

class Swimming extends Component{
    render() {
        return (
           <View style = {styles.activityButtons}>
              <Text>Swimming</Text>
           </View>
        );
     }
}

class RopeSkipping extends Component{
    render() {
        return (
           <View style = {styles.activityButtons}>
              <Text>RopeSkipping</Text>
           </View>
        );
     }
}

class ActBar extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            showContent : false,
        }
    }
    showHideContent = () =>
    {

    }

    render()
    {
        return(
            <View> Deneme </View>
        );
    }
}


class ActivitiesAddEdit extends Component {
    render() 
    {
       return (
          <View style={styles.parent}>
             <Walking />
             <Running />
             <Cycling />
             <Swimming />
             <RopeSkipping />
          </View>
       );
    }
 }
 

 const styles = StyleSheet.create({
    parent:{
        width: '%100',
        height: 100,
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'flex-start',

    },

    activityButtons:{
        width: '%100',
        height: 30,
        backgroundColor: '#ddeeff',
        borderWidth:1.7,
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
 export default ActivitiesAddEdit;