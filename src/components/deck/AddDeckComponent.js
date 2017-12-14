import React from 'react';
import {connect} from 'react-redux';
import {KeyboardAvoidingView, Text, TextInput} from 'react-native';
import {addDeck} from '../../actions';
import {SubmitBtn} from '../form-controls/SubmitBtn';
import {editDeckStyles as styles} from './EditDeckStyles';


class AddDeckComponent extends React.Component {
    state = {
        deck: ''
    };

    submit() {
        if (!this.state.deck) return;

        this.props.addDeck(this.state.deck);
        this.setState({deck: ''});
    }

    render() {
        const {deck} = this.state;

        return (
            <KeyboardAvoidingView behavior='position' style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput style={styles.textInput}
                           placeholder='Deck Title' autofocus={true}
                           value={deck}
                           onChangeText={text => this.setState({deck: text})}/>
                <SubmitBtn text={'Submit'} onPress={this.submit.bind(this)}/>
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