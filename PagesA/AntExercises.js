import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button} from 'react-native';
import { } from 'react-native';

import {getTemplateExList} from '../FetchDataAnt.js';

class AntExHeader extends Component
{

    render()
    {
        return(
            <View style = {styles.header}>
                <View style = {styles.headerTitle}>
                    <Text>{this.props.title}</Text>
                </View>
            </View>
        );
    }
}

class NewExercise extends Component
{
    render()
    {
        return(
            <View style={styles.exercise}>
                <Text style={styles.exTitle}>Add new default exercise</Text>
            </View>
        );
    }
}

class Exercise extends Component 
{
    render()
    {
        return(
            <View style={styles.exercise}>
                <Text style={styles.exTitle}>{this.props.id}</Text>
            </View>
        );
    }
}

class AntExercises extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            antID : this.props.id,
            exList : getTemplateExList(this.props.id),
        }
    }

    getExerciseList()
    {
        const exList = []

        for (const index in this.state.exList)
        {
            exList.push(<Exercise id = {this.state.exList[index]} />)
        }       

        return exList;
    }

    render()
    {
        return(
            <ScrollView>
                <AntExHeader title = "Default Exercises"/>
                <NewExercise id = {this.state.antID}/>
                {this.getExerciseList()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        backgroundColor: '#dddddd',
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',

    },
    headerTitle: {
        flex: 1,
        alignItems: 'center',
    },
    exercise: {
        width: '100%',
        height: 80,
        backgroundColor: '#aec5eb',
        borderBottomWidth: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    exTitle: {
        marginLeft: 10,
    }
});

export default AntExercises;