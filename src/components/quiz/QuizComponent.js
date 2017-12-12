import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SubmitBtn} from '../form-controls/SubmitBtn';
import {darkgreen, red, white} from '../../utils/colors';

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
    correctBtn: {
        backgroundColor: darkgreen,
        borderColor: darkgreen,
    },
    incorrectBtn: {
        backgroundColor: red,
        borderColor: red,
    }
});

class QuizComponent extends React.Component {
    state = {
        currentCard: 0,
        isQuestion: true
    };

    render() {
        const {cards} = this.props;
        const {currentCard, isQuestion} = this.state;

        if (cards.length === 0) return <Text>NONE</Text>;

        const card = cards[0];

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.topContainerSection} onPress={() => this.setState({isQuestion: !isQuestion})}>
                    <Text>{currentCard + 1}/{cards.length}</Text>
                    <Text style={styles.title}>{isQuestion ? card.question : card.answer}</Text>
                    <Text>{isQuestion ? 'Question' : 'Answer'}</Text>
                </TouchableOpacity>
                <View style={styles.bottomContainerSection}>
                    <SubmitBtn text={'Correct'} onPress={() => {
                    }} buttonStyle={styles.correctBtn}/>
                    <SubmitBtn text={'Incorrect'} onPress={() => {
                    }} buttonStyle={styles.incorrectBtn}/>
                </View>
            </View>
        );
    }
}

function mapStateToProps({decks, cards}, {navigation}) {
    const {deckId} = navigation.state.params;
    return {
        cards: decks[deckId].cards.map(card => cards[card])
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuizComponent);