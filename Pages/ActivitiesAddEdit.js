import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button, Alert} from 'react-native';
import { } from 'react-native';

class Walking extends Component{
    render() {
        return (
            <View style = {styles.activityButtons}>
                <Text>Walking</Text>
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
    constructor(props)
    {
        super(props);
        this.state={
            actStyles:[styles.default,styles.default,styles.default,styles.default,styles.default],
        }
    }

    handlePress = (number) =>
    {
        let newStyles = [styles.default,styles.default,styles.default,styles.default,styles.default];
        newStyles[number]=styles.highlighted;

        this.setState({
            actStyles:newStyles,
        });
    }
    handlePress0 = () =>
    {
        this.handlePress(0);
    }
    handlePress1 = () =>
    {
        this.handlePress(1);
    }
    handlePress2 = () =>
    {
        this.handlePress(2);
    }
    handlePress3 = () =>
    {
        this.handlePress(3);
    }
    handlePress4 = () =>
    {
        this.handlePress(4);
    }



    render() 
    {
       return (
          <View style={styles.parent}>
              <View style = {this.state.actStyles[0]} onTouchEnd = {this.handlePress0}>
                  <Text>Koşu</Text>
              </View>
              <View style = {this.state.actStyles[1]} onTouchEnd = {this.handlePress1}>
                  <Text>Yürüyüş</Text>
              </View>
              <View style = {this.state.actStyles[2]} onTouchEnd = {this.handlePress2}>
                  <Text>Yüzme</Text>
              </View>
              <View style = {this.state.actStyles[3]} onTouchEnd = {this.handlePress3}>
                  <Text>ipAtlama</Text>
              </View>
              <View style = {this.state.actStyles[4]} onTouchEnd = {this.handlePress4}>
                  <Text>Bisiklet</Text>
              </View>
          </View>
       );
    }
 }
 

 const styles = StyleSheet.create({
    default:{
        backgroundColor: 'blue',

    },
    highlighted:{
        backgroundColor: 'red',

    },
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