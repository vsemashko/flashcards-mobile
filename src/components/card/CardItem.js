import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {black} from '../../utils/colors';
import {Entypo} from '@expo/vector-icons/index';

const styles = StyleSheet.create({
    container: {
        height: 130,
        flexDirection: 'row',
        borderBottomColor: black,
        borderBottomWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    deleteBtn: {
        position: 'absolute',
        right: 10,
        top: 10
    }
});

export function CardItem({card, onSelect, onRemove}) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelect()}>
            <Text numberOfLines={3} ellipsizeMode='tail' style={styles.title}>{card.question}</Text>
            <TouchableOpacity onPress={() => onRemove()} style={styles.deleteBtn}>
                <Entypo name='cross' size={30}/>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

CardItem.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.string,
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired
    }).isRequired,
    onSelect: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};