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




class ActivitiesAddEdit extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            actStyles:[styles.default,styles.default,styles.default,styles.default,styles.default],
            content:<></>,
        }
    }

    handlePress = (number) =>
    {
        let newStyles = [styles.default,styles.default,styles.default,styles.default,styles.default];
        newStyles[number]=styles.highlighted;
        let contentArray=[<Running />,<Walking />, <Swimming/>,<Cycling/>,<RopeSkipping/>];

        this.setState({
            actStyles:newStyles,
            content:contentArray[number],
            
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
          <View>
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
                  <Text>Bisiklet</Text>
              </View>
              <View style = {this.state.actStyles[4]} onTouchEnd = {this.handlePress4}>
                  <Text>İp Atlama</Text>
              </View>
          </View>
          <View style = {styles.content}>
              {this.state.content}
          </View>
          </View>
       );
    }
 }
 

 const styles = StyleSheet.create({
    default:{
        backgroundColor: 'blue',
        flex:1,
        alignItems:'center',
        justifyContent: 'center',

    },
    highlighted:{
        backgroundColor: 'red',
        flex:1,
        alignItems:'center',
        justifyContent: 'center',

    },
    content:{

    },
    parent:{
        
        height:50,
        flexDirection:'row',
    },

    activityButtons:{
    },

});
 export default ActivitiesAddEdit;