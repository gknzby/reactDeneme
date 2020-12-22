import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button} from 'react-native';
import { } from 'react-native';

class AntMovHeader extends Component
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


class AntMovement extends Component
{


    render()
    {
        return(
            <View>
                <AntMovHeader/>
            </View>
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
}

export default AntMovement;