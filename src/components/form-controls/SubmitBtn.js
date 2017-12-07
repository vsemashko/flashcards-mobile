import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {black, white} from '../../utils/colors';

export function SubmitBtn({text, onPress, buttonStyle = {}, textStyle = {}}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.submitBtn, buttonStyle]}
                onPress={onPress}>
                <Text style={[styles.submitBtnText, textStyle]}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    submitBtn: {
        width: 200,
        borderColor: black,
        borderWidth: 2,
        backgroundColor: black,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 10,
        borderRadius: 7,
        height: 60
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    }
});

SubmitBtn.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    buttonStyle: PropTypes.any,
    textStyle: PropTypes.any
};