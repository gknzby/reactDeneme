import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button} from 'react-native';
import { } from 'react-native';


class Cards extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            title: this.props.title,
        }
    }
    render()
    {
        return(
            <View style={styles.cards}>
                <Text>{this.state.title}</Text>
            </View>
        );
    }
}

class HomePage extends Component
{
  render()
  {
    return (
        <View style={styles.root}>
            <View style={styles.header}>
                <View style={styles.headerNav}>
                    <Image source={require('../assets/favicon.png')} style={styles.headerNavIcon}  />
                </View>
                <View style={styles.headerTitle}>
                    <Text style={styles.headerTitleText}>Yarak</Text>
                </View>
                <View style={styles.headerProfile}>
                    <Image source={require('../assets/favicon.png')} style={styles.headerProfileIcon}  />
                </View>
            </View>
            <View style={styles.body}>
                <ScrollView>
                    <Cards title='Diyet'/>
                    <Cards title='Spor'/>
                    <Cards title='Aktivite'/>
                    <Cards title='Antrenörle İletişim'/>
                </ScrollView>
            </View>
            <View style={styles.footer}>

            </View>
        </View>      
    );
  }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        paddingTop: 20,
        height: 60,
        flexDirection: 'row',

        backgroundColor: 'orange',
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
    body: {
        
    },
    cards: {
        height: 250,
        borderBottomWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        height: 0,
        backgroundColor: 'orange',
    },

});

export default HomePage;