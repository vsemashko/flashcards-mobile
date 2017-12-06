import React from 'react';
import {connect} from 'react-redux';
import {FlatList, View} from 'react-native';
import {DeckItem} from './DeckItem';


function DeckListComponent({decks}) {
    return (
        <View>
            <FlatList data={decks} renderItem={({item}) => <DeckItem deck={item}/>}/>
        </View>
    );
}

function mapStateToProps({decks}) {
    return {
        decks: Object.values(decks)
    };
}

export default connect(
    mapStateToProps
)(DeckListComponent);