import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {black, gray} from '../../utils/colors';

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
    cardsInfo: {
        color: gray
    }
});

export function DeckItem({deck, onSelect}) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelect()}>
            <Text numberOfLines={2} ellipsizeMode='tail' style={styles.title}>{deck.title}</Text>
            <Text style={styles.cardsInfo}>{deck.cards.length} cards</Text>
        </TouchableOpacity>
    );
}

DeckItem.propTypes = {
    deck: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cards: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    onSelect: PropTypes.func.isRequired
};