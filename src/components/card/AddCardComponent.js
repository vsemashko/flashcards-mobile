import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, TextInput, View} from 'react-native';
import {SubmitBtn} from '../form-controls/SubmitBtn';
import {white} from '../../utils/colors';
import {addCard} from '../../actions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white
    },
    textInput: {
        alignSelf: 'stretch',
        margin: 20,
        padding: 10,
        borderWidth: 2,
        borderRadius: 5
    }
});

class AddCardComponent extends React.Component {
    state = {
        question: '',
        answer: ''
    };

    submit() {
        const {question, answer} = this.state;
        const {addCard, goBack, deckId} = this.props;

        if (!question || !answer) return;

        addCard(deckId, question, answer);
        this.setState({question: '', answer: ''});
        goBack();
    }

    render() {
        const {question, answer} = this.state;

        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                           placeholder='Question' multiline={true} numberOfLines={2}
                           value={question}
                           onChangeText={question => this.setState({question})}/>
                <TextInput style={styles.textInput}
                           placeholder='Answer' multiline={true} numberOfLines={5} blurOnSubmit={false}
                           value={answer}
                           onChangeText={answer => this.setState({answer})}/>
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
        addCard: (deckId, question, answer) => dispatch(addCard(deckId, question, answer)),
        goBack: () => navigation.goBack()
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCardComponent);