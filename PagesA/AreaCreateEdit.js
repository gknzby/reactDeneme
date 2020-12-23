import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button, Alert} from 'react-native';
import { } from 'react-native';

import {getTemplateMovList, getMoveInAreaData, getAreaData} from '../FetchDataAnt.js'


class AreaInfo extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            areaTitle : getAreaData(this.props.id).title,
            showContent : false,
            newTitle : "",
        }
    }

    handleChangeButton = () =>
    {
        const showCont = !(this.state.showContent);
        this.setState({
            showContent : showCont
        });
    }

    handleChangeText = (text) =>
    {
        this.setState({
            newTitle : text,
        })
    }

    handleSaveButton = () =>
    {
        let alertText = "New title is " + this.state.newTitle;

        if(this.state.newTitle === "")
        {
            Alert.alert(
                "Failed",
                "New title can't be null",
                [
                    {
                        text: "Okay",
                    }
                ],
                {cancelable: false}
            );

            return;
        }

        Alert.alert(
            "Title has changed",
            alertText,
            [
                {
                    text: "Okay",
                }
            ],
            {cancelable: false}
        );

        let newTitle = this.state.newTitle;
        this.setState({
            areaTitle : newTitle,
            showContent : false,
        })
    }

    render()
    {
        let content;
        let contentStyle;

        if(this.state.showContent)
        {
            contentStyle = styles.showAreaContent;
            content = (
                <View  style = {contentStyle}>
                    <View style = {styles.titleInputV}>
                        <Text>New Title : </Text><TextInput style = {styles.titleInput} onChangeText = {(text) => this.handleChangeText(text)}/>
                    </View>
                    <View style = {styles.titleSave} onTouchEnd = {this.handleSaveButton}>
                        <Text>Save</Text>
                    </View>
                </View>
        )
        }
        else
        {
            content = <></>
            contentStyle = styles.hideAreaContent;
        }

        return(
            <View>
                <View style = {styles.areaInfo}>
                    <View style = {styles.areaTitle}>
                        <Text>{this.state.areaTitle}</Text>
                    </View>
                    <View style = {styles.changeButton} onTouchEnd = {this.handleChangeButton}>
                        <Text>Change</Text>
                    </View>
                </View>
                <View>
                    {content}
                </View>
            </View>

        );
    }
}

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
                    onPress: this.handleRemoveProp
                }
            ],
            { cancelable: false }
        );


    }

    handleRemoveProp = () => 
    {
        this.props.handleRemoveMove(this.props.id);
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
                <AreaInfo id = {this.props.id} />
                {this.getMovList()}
                <NewMovement />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    areaInfo: {
        width: '100%',
        height: 70,
        backgroundColor: '#ddeeff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    areaTitle:{
        flex : 1,
    },
    changeButton:{
        backgroundColor: 'orange',
        padding : 5,
    },
    showAreaContent:{
        borderBottomWidth: 2,
        padding: 12,
        flexDirection: 'row',
    },
    hideAreaContent:{
        height: 0,
    },
    titleInputV:{
        flex : 1,
    },
    titleInput:{
        width : 200,
        backgroundColor : '#dddddd',
    },
    titleSave:{
        backgroundColor: 'orange',
        padding : 5,
        marginRight: 10,
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
    newMov: {
        width: '100%',
        height: 70,
        backgroundColor: '#eeeeff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
});

export default AreaCreateEdit;