import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button, Alert} from 'react-native';
import { } from 'react-native';

import {getTemplateMovList, getMoveData} from '../FetchDataAnt.js'

class NewMovement extends Component
{
    render()
    {
        return(
            <View style = {styles.newMov}>
                <Text>Add New Movement</Text>
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
            set: "",
            repeat: "",
        }
    }

    showHideContent = () =>
    {
        const showCont = !(this.state.showContent);
        this.setState({
            showContent : showCont
        });
    }

    handleChangeSet = (value) =>
    {
        this.setState({
            set : value,
        });
    }
    handleChangeRepeat = (value) =>
    {
        this.setState({
            repeat : value,
        });
    }

    handleAdd = () =>
    {
        let moveData = getMoveData(this.props.id);
        let set = this.state.set === "" ? "0" : this.state.set;
        let repeat = this.state.repeat === "" ? "0" : this.state.repeat;

        if(!(Number(set)) || !(Number(repeat)))
        {
            this.failMessage();
            return;
        }

        let alertText = moveData.title + " with " + set + " set and " + repeat + " repeat?"
        Alert.alert(
            "Are you sure to add this",
            alertText,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { 
                    text: "Add", 
                    onPress: this.successMessage(set, repeat) }
            ],
            { cancelable: false }
        );


    }

    successMessage = (set, repeat) => 
    {
        Alert.alert(
            "Successfly Added!",
            "You can continue to add new moves.",
            [
                { 
                    text: "Okay", 
                    onPress: this.props.handleAddMove(this.props.id, set, repeat)
                }
            ],
            { cancelable: false }
        );
    }

    failMessage = () =>
    {
        Alert.alert(
            "Failed!",
            "You must enter a valid number (Not Zero)",
            [
                {
                    text: "Okay",
                    onPress: () => console.log("OK Pressed")
                }
            ]
        )
    }

    render()
    {
        let moveData = getMoveData(this.props.id);

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
                                <Text>Set : </Text>
                                <TextInput style= {styles.setRepeatInput} id = "set" onChangeText = {(text) => this.handleChangeSet(text)}/>
                            </View>
                            <View style = {styles.inputSet}>
                                <Text>Repeat : </Text>
                                <TextInput style= {styles.setRepeatInput} id = "repeat" onChangeText = {(text) => this.handleChangeRepeat(text)}/>
                            </View> 
                        </View>
                        <View style = {styles.addButton} onTouchEnd = {this.handleAdd}>
                            <Text>Add Movement</Text>
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


class AddMovToArea extends Component
{
    addMoveToArea = (movID, set, repeat) =>
    {
        let alertText = "Area ID : " + this.props.id + "\n"
                        + "Move ID : " + movID + "\n"
                        + "Set : " + set + " Repeat : " + repeat;

        Alert.alert(
            "In main class!",
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

        let movRenderList = movList.map((item) => <Movement id= {item} handleAddMove = {this.addMoveToArea} />);

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
        flexDirection: 'row',
    },
    setRepeatInput:{
        width: 50,
        backgroundColor: '#dddddd',
        textAlign: 'center',
    },
    inputSet:{
        marginLeft: 10,
        marginRight: 10,
    },
    addButton:{
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'orange',
        padding: 10,
    },
});

export default AddMovToArea;