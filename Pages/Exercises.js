import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button} from 'react-native';
import { } from 'react-native';

import {getExListData, getExerciseTitles} from '../FetchData.js';

class Exercise extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            exID : this.props.id,
            exData : getExerciseTitles(this.props.id),
        };
    }

    render()
    {
        return(
            <View style = {styles.exercise}>
                <View style = {styles.exTitle}>
                    <Text>{this.state.exData.title}</Text>
                </View>
                <View style = {styles.exArea}>
                    <Text>{this.state.exData.area}</Text>
                </View>
            </View>
        );
    }
}

class Exercises extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            exsID : this.props.id,
            exsData : getExListData(this.props.id),
        };
    }
    getExList()
    {
        const exList = []

        for (const index in this.state.exsData.exIDs)
        {
            exList.push(<Exercise id = {this.state.exsData.exIDs[index]} />)
        }       

        return exList;
    }

    render()
    {
        return(
            <ScrollView>
                <View style= {styles.banner}><Text>GÖRSEL</Text></View>
                {this.getExList()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    banner:{
        width: '100%',
        height: 250,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    exercise:{
        width: '100%',
        height: 120,
        backgroundColor: '#ccccff',
        borderBottomWidth: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    exTitle:{
        flex: 1,
        marginLeft: 10,
    },
    exArea:{
        width: 100,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderLeftWidth: 2,
    }
});

export default Exercises;