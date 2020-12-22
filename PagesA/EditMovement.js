import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button} from 'react-native';
import { } from 'react-native';


class MovInput extends Component
{

    handleChange = (text) =>
    {
        this.props.handleChange(this.props.id, text);
    }

    render()
    {
        let inputable;
        if(this.props.id === "movContent")
        {
            inputable = <TextInput multiline numberOfLines={5} style = {styles.textInput} onChangeText = {text => this.handleChange(text)}/>;
        }
        else
        {
            inputable = <TextInput style = {styles.textInput} onChangeText = {text => this.handleChange(text)}/>;
        }

        return(
            <View style = {styles.MovInput}>
                <Text style = {styles.MovInputText}>{this.props.texts}</Text>
                {inputable}
            </View>
        );
    }
}


class EditMovement extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            movTitle : "",
            movArea : "",
            movContent : "",
            notification : "",
        }
    }

    changeValue = (id, value) =>
    {
        this.setState({
            [id] : value,
        });
    }

    onSubmit = () =>
    {
        if(this.props.mod === "add")
        {
            this.setState({
                notification : "Added new movement!",
            });
        }
        else
        {
            this.setState({
                notification : "Movement has changed!",
            });
        }

    }

    render()
    {
        let submitText;
        if(this.props.mod === "add")
        {
            submitText = "Add New Movement";
            
        }
        else
        {
            submitText = "Change Movement";
        }

        return(
            <View>
                <MovInput handleChange = {this.changeValue} id = "movTitle" texts = "Move Title"/>
                <MovInput handleChange = {this.changeValue} id = "movArea" texts = "Move Area"/>
                <MovInput handleChange = {this.changeValue} id = "movContent" texts = "Move Explanation"/>
                <View style = {styles.submitButton} onTouchEnd = {this.onSubmit} ><Text>{submitText}</Text></View>
                <Text>{this.state.notification}</Text>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    MovInput:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: '#ddffee',
        padding : 12,
    },
    textInput:{
        marginTop : 2,
        backgroundColor : 'white',
        textAlignVertical:  'top',
    },
    submitButton:{
        height: 50,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default EditMovement;