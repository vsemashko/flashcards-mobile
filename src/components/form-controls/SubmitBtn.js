import PropTypes from 'prop-types';
import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {black, purple, white} from '../../utils/colors';

export function SubmitBtn({text, onPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.submitBtn}
                onPress={onPress}>
                <Text style={styles.submitBtnText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    submitBtn: {
        backgroundColor: black,
        padding: 10,
        marginLeft: 60,
        marginRight: 60,
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
    onPress: PropTypes.func.isRequired
};