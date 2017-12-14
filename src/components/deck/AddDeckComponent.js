import React from 'react';
import {connect} from 'react-redux';
import {KeyboardAvoidingView, Text, TextInput} from 'react-native';
import {addDeck} from '../../actions';
import {SubmitBtn} from '../form-controls/SubmitBtn';
import {editDeckStyles as styles} from './EditDeckStyles';
import {errorStyles, ValidationErrors} from '../form-controls/ValidationErrors';

const getInitialState = function () {
    return {
        deck: '',
        validationErrors: {}
    };
};


class AddDeckComponent extends React.Component {
    state = getInitialState();

    submit() {
        if (!this.state.deck) {
            this.setState({validationErrors: {deck: 'Deck name couldn\'t be empty'}});
            return;
        }

        this.props.addDeck(this.state.deck);
        this.setState(getInitialState());
    }

    render() {
        const {deck, validationErrors} = this.state;

        return (
            <KeyboardAvoidingView behavior='position' style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput style={[styles.textInput, validationErrors.deck && errorStyles.invalidInput]}
                           placeholder='Deck Title' autofocus={true}
                           value={deck}
                           onChangeText={deck => this.setState({deck, validationErrors: {}})}/>
                <SubmitBtn text={'Submit'} onPress={this.submit.bind(this)}/>
                <ValidationErrors errors={Object.values(validationErrors)}/>
            </KeyboardAvoidingView>
        );
    }
}

function mapDispatchToProps(dispatch, {navigation}) {
    return {
        addDeck: deck => {
            const action = addDeck(deck);
            dispatch(action);
            const newDeck = action.payload.deck;
            navigation.navigate('Decks');
            navigation.navigate('DeckDetails', {deckTitle: newDeck.title, deckId: newDeck.id});
        }
    };
}


export default connect(null, mapDispatchToProps)(AddDeckComponent);