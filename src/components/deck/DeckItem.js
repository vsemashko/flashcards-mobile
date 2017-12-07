import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {black, gray} from '../../utils/colors';

export function DeckItem({deck}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.questionsInfo}>{deck.questions.length} cards</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        borderBottomColor: black,
        borderBottomWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    questionsInfo: {
        color: gray
    }
});

DeckItem.propTypes = {
    deck: PropTypes.shape({
        title: PropTypes.string.isRequired,
        questions: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};