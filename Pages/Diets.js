import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button} from 'react-native';
import { } from 'react-native';

import {getDietListData} from '../FetchData.js';

class Diet extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            day : this.props.day,
        }
    }

    render()
    {
        return(
            <View style = {styles.diet}>
                <View style = {styles.dietDay}>
                    <Text>{this.state.day}</Text>
                </View>
            </View>
        );
    }
}


class Diets extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            dietsID : this.props.id,
            dietList : getDietListData(this.props.id),
        }
    }

    getDietList()
    {
        const dietList = []

        for (const index in this.state.dietList.dietIDs)
        {
            dietList.push(<Diet day = {this.state.dietList.dietIDs[index]} />)
        }       

        return dietList;
    }

    render()
    {
        return(
            <ScrollView>
            <View style= {styles.banner}><Text>GÖRSEL</Text></View>
            {this.getDietList()}
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
    diet:{
        width: '100%',
        height: 80,
        backgroundColor: '#aec5eb',
        borderBottomWidth: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dietDay:{
        flex: 1,
        marginLeft: 10,
    },
});

export default Diets;