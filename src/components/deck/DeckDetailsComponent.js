import React from 'react';
import {connect} from 'react-redux';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {black, gray, white} from '../../utils/colors';
import {SubmitBtn} from '../form-controls/SubmitBtn';
import {MaterialIcons} from '@expo/vector-icons/index';
import {removeDeck} from '../../actions';
import {clearLocalNotification, setLocalNotification} from '../../utils/helpers';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center'
    },
    topContainerSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainerSection: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    cardsInfo: {
        color: gray,
        textAlign: 'center',
        fontSize: 20
    }
});

class DeckDetailsComponent extends React.Component {
    goToAddCard() {
        const {navigation, deck} = this.props;

        navigation.navigate('AddCard', {deckId: deck.id, deckTitle: deck.title});
    }

    goToQuiz() {
        const {navigation, deck} = this.props;
        navigation.navigate('Quiz', {deckId: deck.id, deckTitle: deck.title});

        clearLocalNotification()
            .then(setLocalNotification);
    }

    editDeck() {
        const {deck, navigation} = this.props;
        navigation.navigate('EditDeck', {deckId: deck.id, deckTitle: deck.title});
    }

    goToCardList() {
        const {deck, navigation} = this.props;
        navigation.navigate('CardList', {deckId: deck.id});
    }

    confirmDeckRemoval() {
        Alert.alert(
            'Delete deck',
            'Are you sure you want to delete deck?',
            [
                {text: 'Delete', onPress: () => this.removeDeck()},
                {text: 'Cancel', onPress: () => {}, style: 'cancel'},
            ],
            { cancelable: true }
        )
    }

    removeDeck() {
        const {deck, removeDeck, goBack} = this.props;

        goBack();
        removeDeck(deck.id);
    }

    render() {
        const {deck} = this.props;

        if (!deck) return null;

        return (
            <View style={styles.container}>
                <View style={styles.topContainerSection}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity onPress={this.editDeck.bind(this)} style={{marginRight: 10}}>
                            <MaterialIcons name='edit' size={30}/>
                        </TouchableOpacity>
                        <Text style={styles.title}>{deck.title}</Text>
                        <TouchableOpacity onPress={this.confirmDeckRemoval.bind(this)} style={{marginLeft: 10}}>
                            <MaterialIcons name='delete-forever' size={30}/>
                        </TouchableOpacity>
                    </View>
                    {deck.cards.length > 0
                        ? <TouchableOpacity onPress={this.goToCardList.bind(this)}>
                            <Text style={styles.cardsInfo}>{deck.cards.length} cards</Text>
                        </TouchableOpacity>
                        : <Text style={styles.cardsInfo}>{deck.cards.length} cards</Text>
                    }
                </View>
                <View style={styles.bottomContainerSection}>
                    <SubmitBtn text={'Add Card'} onPress={this.goToAddCard.bind(this)} buttonStyle={{backgroundColor: white}} textStyle={{color: black}}/>
                    {deck.cards.length > 0 &&
                    <SubmitBtn text={'Start Quiz'} onPress={this.goToQuiz.bind(this)}/>}
                </View>
            </View>
        );
    }
}

function mapStateToProps({decks}, {navigation}) {
    const {deckId} = navigation.state.params;

    return {
        deck: decks[deckId]
    };
}

function mapDispatchToProps(dispatch, {navigation}) {
    return {
        removeDeck: (deckId) => dispatch(removeDeck(deckId)),
        goBack: () => navigation.goBack()
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckDetailsComponent);