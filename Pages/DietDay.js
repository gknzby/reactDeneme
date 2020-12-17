import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button} from 'react-native';
import { } from 'react-native';

import {getDietData} from '../FetchData.js';

class DietDayHeader extends Component
{

    render()
    {
        return(
            <View style = {styles.header}>
                <View style = {styles.headerDay}>
                    <Text>{this.props.day}</Text>
                </View>
                <View style = {styles.headerDate}>
                    <Text>{this.props.date}</Text>
                </View>
            </View>
        );
    }
}

class DietContent extends Component
{
    //İLKAY YAPACAKMIŞ
    render()
    {
        return(
            <Text>{this.props.content}</Text>
        );
    }
}

class DietDay extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            dietID : this.props.id,
            dietData : getDietData(this.props.id),
        }
    }

    render()
    {
        return(
            <ScrollView>
                <View style = {styles.banner}><Text>GÖRSEL</Text></View>
                <DietDayHeader date = {this.state.dietData.date} day = {this.state.dietData.day}/>
                <DietContent content = {this.state.dietData.content}/>
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
    header: {
        width: '100%',
        height: 50,
        backgroundColor: '#dddddd',
        borderBottomWidth: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerDay: {
        flex: 1,
        marginLeft: 20,
    },
    headerDate: {
        width: 150,
        height: '100%',
        marginRight: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
})

export default DietDay;