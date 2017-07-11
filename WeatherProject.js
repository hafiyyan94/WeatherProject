/**
 * Created by DELL on 6/15/2017.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image
} from 'react-native';

var Forecast = require('./Forecast');
var WeatherProject = React.createClass({
    getInitialState() {
        return {
            zip: '',
            forecast: {
                main: 'Clouds',
                description: 'few clouds',
                temp: 45.7
            }
        }
    },
    _handleTextChange(event) {
        console.log(event.nativeEvent.text);
        fetch('http://api.apixu.com/v1/forecast.json?key=e4e6ddc03c244d898bd55805171007&q=Jakarta').then((response) => response.json()).then((responseJSON) => {
            console.log(responseJSON);
        }).catch((error) =>{
            console.warn(error);
        });
        this.setState({
            zip: event.nativeEvent.text
        });
    },
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    You input {this.state.zip}
                </Text>
                <TextInput
                    style={styles.input}
                    returnKeyType='go'
                    onSubmitEditing={this._handleTextChange}/>
                <Forecast
                    main={this.state.forecast.main}
                    description={this.state.forecast.description}
                    temp={this.state.forecast.temp}/>
            </View>
        );
    }
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4D4D4D',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        fontSize: 20,
        borderWidth: 2,
        height: 40,
        width: 200
    }
})
module.exports = WeatherProject;