import React from 'react';
import {connect} from 'react-redux';
import {TextInput, View} from 'react-native';
import {SubmitBtn} from '../form-controls/SubmitBtn';
import {addCard} from '../../actions';
import {editCardStyles as styles} from './CardStyles';
import {errorStyles, ValidationErrors} from '../form-controls/ValidationErrors';

const getInitialState = function () {
    return {
        question: '',
        answer: '',
        validationErrors: {}
    };
};

class AddCardComponent extends React.Component {
    state = getInitialState();

    submit() {
        const {question, answer} = this.state;
        const {addCard, goBack, deckId} = this.props;

        if (!this.validate(this.state)) return;

        addCard(deckId, question, answer);
        this.setState(getInitialState());
        goBack();
    }

    render() {
        const {question, answer, validationErrors} = this.state;

        return (
            <View style={styles.container}>
                <TextInput style={[styles.textInput, styles.questionInput, validationErrors.question && errorStyles.invalidInput]}
                           placeholder='Question' multiline={true} numberOfLines={2}
                           value={question}
                           onChangeText={question => this.setState({question, validationErrors: {}})}/>
                <TextInput style={[styles.textInput, styles.answerInput, validationErrors.answer && errorStyles.invalidInput]}
                           placeholder='Answer' multiline={true} numberOfLines={5} blurOnSubmit={false}
                           value={answer}
                           onChangeText={answer => this.setState({answer, validationErrors: {}})}/>
                <SubmitBtn text={'Submit'} onPress={this.submit.bind(this)}/>
                <ValidationErrors errors={Object.values(validationErrors)}/>
            </View>
        );
    }

    validate({question, answer}) {
        let validationErrors = {};
        !question && (validationErrors.question = 'Question couldn\'t be empty');
        !answer && (validationErrors.answer = 'Answer couldn\'t be empty');

        this.setState({validationErrors});
        return Object.keys(validationErrors).length === 0;
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