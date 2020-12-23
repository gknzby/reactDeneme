import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button, Alert} from 'react-native';
import { } from 'react-native';

import {getTemplateMovList, getMoveInAreaData} from '../FetchDataAnt.js'

class NewMovement extends Component
{
    render()
    {
        return(
            <View style = {styles.newMov}>
                <Text>Add Movement</Text>
            </View>
        );
    }
}

class Movement extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            showContent : false,
        }
    }

    showHideContent = () =>
    {
        const showCont = !(this.state.showContent);
        this.setState({
            showContent : showCont
        });
    }

    handleRemove = () =>
    {
        let moveData = getMoveInAreaData(this.props.id);

        let alertText = moveData.title;
        Alert.alert(
            "Are you sure to remove this",
            alertText,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { 
                    text: "Remove", 
                    onPress: this.props.handleRemoveMove(this.props.id) }
            ],
            { cancelable: false }
        );


    }

    render()
    {
        let moveData = getMoveInAreaData(this.props.id);

        let contentStyle;
        let content;

        if(this.state.showContent)
        {
            content = (
                <>
                    <View>
                        <Text>{moveData.content}</Text>
                    </View>
                    <View style = {styles.buttons}>
                        <View style = {styles.setRepeat} >
                            <View style = {styles.inputSet}>
                                <Text>Set : {moveData.set}</Text>
                            </View>
                            <View style = {styles.inputSet}>
                                <Text>Repeat : {moveData.repeat}</Text>
                            </View> 
                        </View>
                        <View style = {styles.removeButton} onTouchEnd = {this.handleRemove}>
                            <Text>Remove</Text>
                        </View>
                    </View>

                </>
            )
            contentStyle = styles.showMovContent;
        }
        else
        {
            content = <></>
            contentStyle = styles.hideMovContent;
        }

        return(
            <View>
                <View style = {styles.movement} onTouchEnd = {this.showHideContent}>
                    <View style = {styles.movTitle}>
                        <Text>{moveData.title}</Text>
                    </View>
                    <View style = {styles.movArea}>
                        <Text>{moveData.area}</Text>
                    </View>
                </View>
                <View style = {contentStyle}>
                    {content}
                </View>

            </View>
        );
    }
}


class AreaCreateEdit extends Component
{
    handleRemove = (movID) =>
    {
        let alertText = "Area ID : " + this.props.id + "\n"
                        + "Move ID : " + movID + "\n"

        Alert.alert(
            "Removed From Area!",
            alertText,
            [
                { 
                    text: "Okay", 
                    onPress: () => console.log("OK Pressed") 
                }
            ],
            { cancelable: false }
        );
    }

    getMovList()
    {
        const movList = getTemplateMovList(this.props.id);

        let movRenderList = movList.map((item) => <Movement id= {item} handleRemoveMove = {this.handleRemove} />);

        return movRenderList;
    }

    render()
    {

        return(
            <ScrollView>
                <NewMovement />
                {this.getMovList()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    newMov: {
        width: '100%',
        height: 70,
        backgroundColor: '#eeeeff',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    newMov: {
        width: '100%',
        height: 70,
        backgroundColor: '#eeeeff',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    movement: {
        width: '100%',
        height: 70,
        backgroundColor: '#ddeeff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    movTitle: {
        flex: 1,
    },
    movArea: {

    },
    showMovContent:{
        borderBottomWidth: 2,
        padding: 12,
    },
    hideMovContent:{
        height: 0,
    },
    buttons:{
        flexDirection: 'row',
        paddingTop: 20,
        width: '100%',
    },
    setRepeat:{
        flexDirection: 'column',
    },
    setRepeatInput:{
        width: 50,
        backgroundColor: '#dddddd',
        textAlign: 'center',
        flexDirection: 'column',
    },
    inputSet:{
        margin : 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#dddddd'
    },
    removeButton:{
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'red',
        padding: 10,
    },
});

export default AreaCreateEdit;