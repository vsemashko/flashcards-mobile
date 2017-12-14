import React from 'react';
import {connect} from 'react-redux';
import {KeyboardAvoidingView, TextInput, View} from 'react-native';
import {SubmitBtn} from '../form-controls/SubmitBtn';
import {renameDeck} from '../../actions/decks.action';
import {editDeckStyles as styles} from './EditDeckStyles';
import {errorStyles, ValidationErrors} from '../form-controls/ValidationErrors';

const getInitialState = function () {
    return {
        deck: '',
        validationErrors: {}
    };
};

class EditDeckComponent extends React.Component {
    state = getInitialState();

    componentDidMount() {
        this.setState({deck: this.props.deckTitle})
    }

    submit() {
        if (!this.state.deck) {
            this.setState({validationErrors: {deck: 'Deck name couldn\'t be empty'}});
            return;
        }

        const {deckId, renameDeck, goBack} = this.props;

        renameDeck(deckId, this.state.deck);
        this.setState(getInitialState());
        goBack();
    }

    render() {
        const {deck, validationErrors} = this.state;

        return (
            <View behavior='position' style={styles.container}>
                <TextInput style={[styles.textInput, validationErrors.deck && errorStyles.invalidInput]}
                           placeholder='Deck Title' autofocus={true}
                           value={deck}
                           onChangeText={deck => this.setState({deck, validationErrors: {}})}/>
                <SubmitBtn text={'Submit'} onPress={this.submit.bind(this)}/>
                <ValidationErrors errors={Object.values(validationErrors)}/>
            </View>
        );
    }
}

function mapStateToProps(state, {navigation}) {
    const {deckId, deckTitle} = navigation.state.params;
    return {
        deckId,
        deckTitle
    };
}

function mapDispatchToProps(dispatch, {navigation}) {
    return {
        renameDeck: (deckId, deckTitle) => dispatch(renameDeck(deckId, deckTitle)),
        goBack: () => navigation.goBack()
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditDeckComponent);