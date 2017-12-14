import React from 'react';
import PropTypes from 'prop-types';
import {red, white} from '../../utils/colors';
import {StyleSheet, Text, View} from 'react-native';

export const errorStyles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        backgroundColor: red,
        borderRadius: 5
    },
    errorText: {
        color: white
    },
    invalidInput: {
        borderWidth: 2,
        borderColor: red
    }
});

export const ValidationErrors = ({errors = []}) => {
    if (errors.length === 0) return null;

    return (<View style={errorStyles.container}>
        {errors.map(error => <Text style={errorStyles.errorText} key={error}>{error}</Text>)}
    </View>);
};

ValidationErrors.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string)
};