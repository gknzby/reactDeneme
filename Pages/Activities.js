// ILKAY EROL  EKLEDİM 
import React, {Children, Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button, Alert} from 'react-native';
import { } from 'react-native';





class AddActivity extends Component
{
    handlePress = () => {
        Alert.alert("TIKLANDI");
    }

    render()
    {
        return(
            <View>
                <View style = {styles.movement} onTouchEnd = {this.handlePress}>
                    <View style = {styles.movTitle}>
                        <Text>Ektivite Ekle</Text>
                    </View>
                </View>
            </View>

        );
    }
}








class Activities extends Component
{
    handlePress = () => {
        Alert.alert("TIKLANDI");
    }

    render()
    {
        return(
            <View>
                <View style = {styles.movement} onTouchEnd = {this.handlePress}>
                    <View style = {styles.movTitle}>
                        <Text>Ektivite Ekle</Text>
                    </View>
                </View>
            </View>

        );
    }
}










const styles = StyleSheet.create({
    movement: {
        width: '100%',
        height: 80,
        backgroundColor: '#aec5eb',
        borderBottomWidth: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    movTitle: {
        flex: 1,
        marginLeft: 10,
    },
});

export default Activities;