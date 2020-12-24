import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button, Alert, TextInputBase} from 'react-native';
import { } from 'react-native';

import {getActivityData} from '../FetchData.js'

class Running extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            //activityData : getActivityData(this.props.id).data,
            title:"Running",
            newData : "",
        }
    }

    handleAddButton = () =>
    {
        let newData = this.setState.newData;
        this.setState({
            newData
        })

        Alert.alert ("Clicked");

        
    }

    render() {
        return (
            <View style={styles.activityButtons}>
                <View >
                    <Text>Add Running Data</Text>
                    <TextInput style={styles.dataBox} placeholder="Minutes"/>
                    <View >
                        <Button color='pink'
                        title="Add Activity"
                        onPress={() => this.handleAddButton()}
                        />
                    </View>
                </View>
            </View>
        );
     }
}

class Walking extends Component{
    render() {
        return (
            <View style={styles.activityButtons}>
                <View >
                    <Text>Add Walking Data</Text>
                    <TextInput style={styles.dataBox} placeholder="Step"/>
                    <View>
                        <Button color='pink'
                        title="Add Activity"
                        />
                    </View>
                </View>
            </View>
        );
     }
}

class Swimming extends Component{
    render() {
        return (
            <View style={styles.activityButtons}>
            <View >
                <Text>Add Swimming Data</Text>
                <TextInput style={styles.dataBox} placeholder="Minutes"/>
                <View>
                    <Button color='pink'
                    title="Add Activity"
                    />
                </View>
            </View>
        </View>
        );
     }
}

class Cycling extends Component{
    render() {
        return (
            <View style={styles.activityButtons}>
            <View >
                <Text>Add Cycling Data</Text>
                <TextInput style={styles.dataBox} placeholder="Minutes"/>
                <View>
                    <Button color='pink'
                    title="Add Activity"
                    />
                </View>
            </View>
        </View>
        );
     }
}

class RopeSkipping extends Component{
    render() {
        return (
            <View style={styles.activityButtons}>
            <View >
                <Text>Add Skipping Rope Data</Text>
                <TextInput style={styles.dataBox} placeholder="Minutes"/>
                <View>
                    <Button color='pink'
                    title="Add Activity"
                    />
                </View>
            </View>
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
                  <Text>Running</Text>
              </View>
              <View style = {this.state.actStyles[1]} onTouchEnd = {this.handlePress1}>
                  <Text>Walking</Text>
              </View>
              <View style = {this.state.actStyles[2]} onTouchEnd = {this.handlePress2}>
                  <Text>Swimming</Text>
              </View>
              <View style = {this.state.actStyles[3]} onTouchEnd = {this.handlePress3}>
                  <Text>Cycling</Text>
              </View>
              <View style = {this.state.actStyles[4]} onTouchEnd = {this.handlePress4}>
                  <Text>Skipping Rope</Text>
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
        backgroundColor: 'cyan',
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
        alignItems: 'center',
        paddingTop: 50,
    },

    // TEST STYLES
    dataBox: {
        marginTop: 10,
        height:30,
        width: '50%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 4,
    },
    
});
 export default ActivitiesAddEdit;