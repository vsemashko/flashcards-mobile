import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, TextInput, View} from 'react-native';
import {SubmitBtn} from '../form-controls/SubmitBtn';
import {white} from '../../utils/colors';
import {editCard} from '../../actions/cards.action';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white
    },
    textInput: {
        margin: 10,
        alignSelf: 'stretch',
        padding: 10,
        borderWidth: 2,
        borderRadius: 5
    },
    questionInput: {
        marginBottom: 0,
        maxHeight: 70
    },
    answerInput: {
        maxHeight: 150
    }
});

class EditCardComponent extends React.Component {
    state = {
        question: '',
        answer: ''
    };

    componentDidMount() {
        const {question, answer} = this.props.card;
        this.setState({question, answer});
    }

    submit() {
        const {question, answer} = this.state;
        const {card, editCard, goBack} = this.props;

        if (!question || !answer) return;


        const updatedCard = {...card, question, answer};

        editCard(updatedCard);
        this.setState({question: '', answer: ''});
        goBack();
    }

    render() {
        const {question, answer} = this.state;

        return (
            <View behavior='position' style={styles.container}>
                <TextInput style={[styles.textInput, styles.questionInput]}
                           placeholder='Question' multiline={true} numberOfLines={2}
                           value={question}
                           onChangeText={question => this.setState({question})}/>
                <TextInput style={[styles.textInput, styles.answerInput]}
                           placeholder='Answer' multiline={true} numberOfLines={5} blurOnSubmit={false}
                           value={answer}
                           onChangeText={answer => this.setState({answer})}/>
                <SubmitBtn text={'Submit'} onPress={this.submit.bind(this)}/>
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