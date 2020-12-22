import React, {Children, Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button} from 'react-native';
import { } from 'react-native';

import {getExerciseData, getMovementData} from '../FetchData.js'

class ExDayHeader extends Component
{
    render()
    {
        return(
            <View style = {styles.header}>
                <View style = {styles.headerTitle}>
                    <Text>{this.props.exData.title}</Text>
                </View>
                <View style = {styles.headerArea}>
                    <Text>{this.props.exData.area}</Text>
                </View>
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
            moveID : this.props.id,
            moveData : getMovementData(this.props.id),
            content : "",
            showContent : false,
            contentStyle : styles.hideContent,
        }


    }

    handlePress = () => {
        if(!this.state.showContent)
        {
            const moveCont = this.state.moveData.content;
            this.setState({
                content: moveCont,
                contentStyle: styles.showContent,
                showContent: true,
            });
        }
        else
        {
            this.setState({
                content: "",
                contentStyle: styles.hideContent,
                showContent: false,
            });
        }
    }

    render()
    {
        return(
            <View>
                <View style = {styles.movement} onTouchEnd = {this.handlePress}>
                    <View style = {styles.movTitle}>
                        <Text>{this.state.moveData.title}</Text>
                    </View>
                    <View style = {styles.movSet}>
                        <Text>{this.state.moveData.set}</Text>
                    </View>
                    <View style = {styles.movRepeat}>
                        <Text>{this.state.moveData.repeat}</Text>
                    </View>
                </View>
                <View style={this.state.contentStyle}>
                    <Text>{this.state.content}</Text>
                </View>
            </View>

        );
    }
}

class ExerciseDay extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            exID : this.props.id,
            exData : getExerciseData(this.props.id),
        }

    }

    getMoveList() 
    {
        const moveList = [];

        for (const index in this.state.exData.moveIDs)
        {
            moveList.push(<Movement id = {this.state.exData.moveIDs[index]} />)
        }

        const yeni = this.state.exData.moveIDs.map((item) => <Movement id= {item}/>);

        return yeni;
    }


    render()
    {
        return(
            <ScrollView>
                <View style= {styles.banner}><Text>GÖRSEL</Text></View>
                <ExDayHeader exData/>
                {this.getMoveList()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    banner:{
        width: '100%',
        height: 250,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: 'gray',
        borderBottomWidth: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        flex: 1,
        marginLeft: 20,
    },
    headerArea: {
        width: 150,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
    movSet: {
        width: 50,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 2,
    },
    movRepeat: {
        width: 50,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderLeftWidth: 2,
    },
    hideContent: {
        height: 0,
    },
    showContent: {
        height: 100,
    },
});

export default ExerciseDay;