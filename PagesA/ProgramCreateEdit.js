import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button, Alert} from 'react-native';
import { } from 'react-native';

import {getAreaInProgramList, getAreaInProgramData, getProgramData} from '../FetchDataAnt.js'


class ProgramInfo extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            programTitle : getProgramData(this.props.id).title,
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
            contentStyle = styles.showProgramContent;
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
            contentStyle = styles.hideProgramContent;
        }

        return(
            <View>
                <View style = {styles.programInfo}>
                    <View style = {styles.programTitle}>
                        <Text>{this.state.programTitle}</Text>
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

class NewArea extends Component
{
    render()
    {
        return(
            <View style = {styles.newArea}>
                <Text>Add Area</Text>
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

    handleRemove = () =>
    {
        let areaData = getAreaInProgramData(this.props.id);

        let alertText = areaData.title;
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
        this.props.handleRemoveArea(this.props.id);
    }

    render()
    {
        let areaData = getAreaInProgramData(this.props.id);

        let contentStyle;
        let content;

        if(this.state.showContent)
        {
            content = (
                <>
                    <View>
                        <Text>{areaData.content}</Text>
                    </View>
                    <View style = {styles.buttons}>
                        <View style = {styles.removeButton} onTouchEnd = {this.handleRemove}>
                            <Text>Remove Area</Text>
                        </View>
                        <View style = {styles.editButton}>
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
                <View style = {styles.area} onTouchEnd = {this.showHideContent}>
                    <View style = {styles.areaTitle}>
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


class ProgramCreateEdit extends Component
{
    handleRemove = (areaID) =>
    {
        let alertText = "Program ID : " + this.props.id + "\n"
                        + "Area ID : " + areaID + "\n"

        Alert.alert(
            "Removed From Program!",
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

    getAreaList()
    {
        const areaList = getAreaInProgramList(this.props.id);

        let areaRenderList = areaList.map((item) => <Area id= {item} handleRemoveArea = {this.handleRemove} />);

        return areaRenderList;
    }

    render()
    {

        return(
            <ScrollView>
                <ProgramInfo id = {this.props.id} />
                {this.getAreaList()}
                <NewArea />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    programInfo: {
        width: '100%',
        height: 70,
        backgroundColor: '#ddeeff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    programTitle:{
        flex : 1,
    },
    changeButton:{
        backgroundColor: 'orange',
        padding : 5,
    },
    showProgramContent:{
        borderBottomWidth: 2,
        padding: 12,
        flexDirection: 'row',
    },
    hideProgramContent:{
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
    area: {
        width: '100%',
        height: 70,
        backgroundColor: '#ddeeff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    areaTitle: {
        flex: 1,
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
        width: '100%',
    },
    inputSet:{
        margin : 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#dddddd'
    },
    removeButton:{
        justifyContent: 'center',
        alignSelf: 'flex-start',
        backgroundColor: 'red',
        padding: 10,
    },
    editButton:{
        marginLeft: 'auto',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        backgroundColor: 'orange',
        padding: 10,
    },
    newArea: {
        width: '100%',
        height: 70,
        backgroundColor: '#eeeeff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
});

export default ProgramCreateEdit;