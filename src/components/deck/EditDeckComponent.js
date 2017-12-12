import React from 'react';
import {connect} from 'react-redux';
import {KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native';
import {SubmitBtn} from '../form-controls/SubmitBtn';
import {white} from '../../utils/colors';
import {renameDeck} from '../../actions/decks.action';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center'
    },
    textInput: {
        height: 50,
        alignSelf: 'stretch',
        margin: 20,
        padding: 10,
        borderWidth: 2,
        borderRadius: 5
    }
});

class EditDeckComponent extends React.Component {
    state = {
        deck: ''
    };

    componentDidMount() {
        this.setState({deck: this.props.deckTitle})
    }

    submit() {
        if (!this.state.deck) return;

        const {deckId, renameDeck, goBack} = this.props;

        renameDeck(deckId, this.state.deck);
        this.setState({deck: ''});
        goBack();
    }

    render() {
        const {deck} = this.state;

        return (
            <View behavior='position' style={styles.container}>
                <TextInput style={styles.textInput}
                           placeholder='Deck Title' autofocus={true}
                           value={deck}
                           onChangeText={deck => this.setState({deck})}/>
                <SubmitBtn text={'Submit'} onPress={this.submit.bind(this)}/>
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