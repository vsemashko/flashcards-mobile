import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import {black, red} from '../../utils/colors';

const styles = StyleSheet.create({
    flipCardContainer: {
        flex: 1,
        padding: 20,
        borderWidth: 2,
        borderColor: black,
        borderRadius: 15
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: red
    },
    content: {
        textAlign: 'center'
    }
});

export const FlipCardItem = ({title, content, onPress}) => (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.flipCardContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text numberOfLines={18} ellipsizeMode='tail' style={styles.content}>{content}</Text>
        </View>
    </TouchableWithoutFeedback>
);

FlipCardItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};