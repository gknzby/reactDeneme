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
        }
    }

    showHideContent = () =>
    {
        const showCont = !(this.state.showContent);
        this.setState({
            showContent : showCont
        });
    }

    createTwoButtonAlert = () => 
    {
        let moveData = getMoveData(this.props.id);
        const title = moveData.title;

        Alert.alert(
            "Are you sure to delete this",
            title,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { 
                    text: "Delete", 
                    onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
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
                        <View style = {styles.deleteMov} onTouchEnd = {this.createTwoButtonAlert}>
                            <Text>Delete Movement</Text>
                        </View>
                        <View style = {styles.editMov}>
                            <Text>Edit Movement</Text>
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

class AntMovement extends Component
{

    getMovList()
    {
        const movList = getTemplateMovList(this.props.id);

        let movRenderList = movList.map((item) => <Movement id= {item}/>);

        return movRenderList;
    }

    render()
    {
        return(
            <View>
                <NewMovement />
                {this.getMovList()}
            </View>
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
    },
    editMov:{
        flex: 3,
        height: 30,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteMov:{
        flex: 2,
        height: 30,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
});

export default AntMovement;