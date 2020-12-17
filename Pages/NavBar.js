import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button} from 'react-native';
import { } from 'react-native';

class NavBar extends Component
{
    render()
    {
        return(
        <View style={styles.header}>
            <View style={styles.headerNav}>
                <Image source={require('../assets/favicon.png')} style={styles.headerNavIcon}  />
            </View>
            <View style={styles.headerTitle}>
                <Text style={styles.headerTitleText}>Title</Text>
            </View>
            <View style={styles.headerProfile}>
                <Image source={require('../assets/favicon.png')} style={styles.headerProfileIcon}  />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 20,
        height: 60,
        flexDirection: 'row',

        backgroundColor: '#ee4050',
    },
    headerTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitleText: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    headerNav: {
        width: 40,
    },
    headerNavIcon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginTop: 5,
    },
    headerProfile: {
        width: 40,
    },
    headerProfileIcon: {
        width: 30,
        height: 30,
        marginTop: 5,
        marginRight: 10,
    },
});

export default NavBar;