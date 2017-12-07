import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import {black, gray, white} from '../../utils/colors';
import {SubmitBtn} from '../form-controls/SubmitBtn';

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
    cardssInfo: {
        color: gray,
        textAlign: 'center',
        fontSize: 20
    }
});

class DeckDetailsComponent extends React.Component {
    goToAddCard() {
        const {navigation, deck} = this.props;
        navigation.navigate('AddCard', {deck: deck.title});
    }

    goToQuiz() {
        const {navigation, deck} = this.props;
        navigation.navigate('Quiz', {deck: deck.title});
    }

    render() {
        const {deck} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.topContainerSection}>
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text style={styles.cardssInfo}>{deck.cards.length} cards</Text>
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
    const {deck} = navigation.state.params;

    return {
        deck: decks[deck]
    };
}

export default connect(
    mapStateToProps
)(DeckDetailsComponent);