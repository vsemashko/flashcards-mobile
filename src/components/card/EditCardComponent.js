import React from 'react';
import {connect} from 'react-redux';
import {TextInput, View} from 'react-native';
import {SubmitBtn} from '../form-controls/SubmitBtn';
import {editCard} from '../../actions/cards.action';
import {editCardStyles as styles} from './CardStyles';
import {errorStyles, ValidationErrors} from '../form-controls/ValidationErrors';

const getInitialState = function () {
    return {
        question: '',
        answer: '',
        validationErrors: {}
    };
};

class EditCardComponent extends React.Component {
    state = getInitialState();

    componentDidMount() {
        const {question, answer} = this.props.card;
        this.setState({question, answer});
    }

    submit() {
        const {question, answer} = this.state;
        const {card, editCard, goBack} = this.props;

        if (!this.validate(this.state)) return;

        const updatedCard = {...card, question, answer};

        editCard(updatedCard);
        this.setState(getInitialState());
        goBack();
    }

    validate({question, answer}) {
        let validationErrors = {};
        !question && (validationErrors.question = 'Question couldn\'t be empty');
        !answer && (validationErrors.answer = 'Answer couldn\'t be empty');

        this.setState({validationErrors});
        return Object.keys(validationErrors).length === 0;
    }

    render() {
        const {question, answer, validationErrors} = this.state;

        return (
            <View behavior='position' style={styles.container}>
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
}

function mapStateToProps({cards}, {navigation}) {
    const {cardId} = navigation.state.params;
    return {
        card: cards[cardId]
    };
}

function mapDispatchToProps(dispatch, {navigation}) {
    return {
        editCard: (card) => dispatch(editCard(card)),
        goBack: () => navigation.goBack()
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditCardComponent);