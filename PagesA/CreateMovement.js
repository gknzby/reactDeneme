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


class CreateMovement extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            movTitle : "",
            movArea : "",
            movContent : "",
        }
    }

    changeValue = (id, value) =>
    {
        this.setState({
            [id] : value,
        });
    }

    render()
    {
        return(
            <View>
                <MovInput handleChange = {this.changeValue} id = "movTitle" texts = "Move Title"/>
                <MovInput handleChange = {this.changeValue} id = "movArea" texts = "Move Area"/>
                <MovInput handleChange = {this.changeValue} id = "movContent" texts = "Move Explanation"/>
                <Text>{this.state.movTitle}, {this.state.movArea}, {this.state.movContent}</Text>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    MovInput:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: '#ddffee',
        padding : 10,
    },
    MovInputText:{

    },
    textInput:{
        backgroundColor : 'white',
        textAlignVertical:  'top',
    },
})

export default CreateMovement;