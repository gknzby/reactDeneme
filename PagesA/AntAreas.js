import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button, Alert} from 'react-native';
import { } from 'react-native';

import {getTemplateAreaList, getAreaData} from '../FetchDataAnt.js'

class NewArea extends Component
{
    render()
    {
        return(
            <View style = {styles.newArea}>
                <Text>Create Area</Text>
            </View>
        );
    }
}

class Area extends Component
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
        let areaData = getAreaData(this.props.id);
        const title = areaData.title;

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
        let areaData = getAreaData(this.props.id);

        let contentStyle;
        let content;

        if(this.state.showContent)
        {
            content = (
                <>
                    <View style = {styles.buttons}>
                        <View style = {styles.deleteArea} onTouchEnd = {this.createTwoButtonAlert}>
                            <Text>Delete Area</Text>
                        </View>
                        <View style = {styles.editArea}>
                            <Text>Edit Area</Text>
                        </View>
                    </View>

                </>
            )
            contentStyle = styles.showAreaContent;
        }
        else
        {
            content = <></>
            contentStyle = styles.hideAreaContent;
        }

        return(
            <View>
                <View style = {styles.Areaement} onTouchEnd = {this.showHideContent}>
                    <View style = {styles.AreaTitle}>
                        <Text>{areaData.title}</Text>
                    </View>
                </View>
                <View style = {contentStyle}>
                    {content}
                </View>

            </View>
        );
    }
}

class AntAreas extends Component
{



    getAreaList()
    {
        const areaList = getTemplateAreaList(this.props.id);

        let areaRenderList = areaList.map((item) => <Area id= {item}/>);

        return areaRenderList;
    }

    render()
    {
        return(
            <ScrollView>
                <NewArea />
                {this.getAreaList()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    newArea: {
        width: '100%',
        height: 70,
        backgroundColor: '#eeeeff',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    Areaement: {
        width: '100%',
        height: 70,
        backgroundColor: '#ddeeff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    AreaTitle: {
        flex: 1,
    },
    AreaArea: {

    },
    showAreaContent:{
        borderBottomWidth: 2,
        padding: 12,
    },
    hideAreaContent:{
        height: 0,
    },
    buttons:{
        flexDirection: 'row',
        paddingTop: 20,
    },
    editArea:{
        flex: 3,
        height: 30,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteArea:{
        flex: 2,
        height: 30,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
});

export default AntAreas;