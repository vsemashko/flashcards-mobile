import {Text, TouchableWithoutFeedback, View} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import {flipCardItemStyles as styles} from './QuizStyles';

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