import React from 'react';
import {connect} from 'react-redux';
import {FlatList, StyleSheet, View, Alert} from 'react-native';
import {white} from '../../utils/colors';
import {CardItem} from './CardItem';
import {removeCard, removeDeck} from '../../actions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white
    },
});

class CardListComponent extends React.Component {
    goToEditCard(card) {
        this.props.navigation.navigate('EditCard', {cardId: card.id});
    }

    confirmCardRemoval(card) {
        Alert.alert(
            'Delete card',
            'Are you sure you want to delete card?',
            [
                {text: 'Delete', onPress: () => this.removeCard(card)},
                {text: 'Cancel', onPress: () => {}, style: 'cancel'},
            ],
            { cancelable: true }
        )
    }

    removeCard(card) {
        const {deckId, removeCard} = this.props;

        removeCard(deckId, card.id);
    }

    render() {
        const {cards} = this.props;

        return (
            <View style={styles.container}>
                <FlatList data={cards}
                          keyExtractor={item => item.id}
                          renderItem={({item}) =>
                              <CardItem card={item}
                                        onSelect={this.goToEditCard.bind(this, item)}
                                        onRemove={this.confirmCardRemoval.bind(this, item)}/>
                          }/>
            </View>
        );
    }
}

function mapStateToProps({decks, cards}, {navigation}) {
    const {deckId} = navigation.state.params;

    return {
        deckId,
        cards: decks[deckId].cards.map(cardId => cards[cardId])
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeCard: (deckId, cardId) => dispatch(removeCard(deckId, cardId))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardListComponent);