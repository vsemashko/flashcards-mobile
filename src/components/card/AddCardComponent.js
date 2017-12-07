import React from 'react';
import {connect} from 'react-redux';
import {ScrollView, StyleSheet, TextInput} from 'react-native';
import {addCard} from '../../actions';
import {SubmitBtn} from '../form-controls/SubmitBtn';
import {white} from '../../utils/colors';

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
        const {addCard, deck} = this.props;

        if (!question || !answer) return;

        addCard(deck, question, answer);
        this.setState({question: '', answer: ''});
        this.props.navigation.navigate('DeckDetails', {deck});
    }

    render() {
        const {question, answer} = this.state;

        return (
            <ScrollView style={styles.container}>
                <TextInput style={styles.textInput}
                           placeholder='Question' multiline={true} numberOfLines={3}
                           value={question}
                           onChangeText={question => this.setState({question})}/>
                <TextInput style={styles.textInput}
                           placeholder='Answer' multiline={true} numberOfLines={8} blurOnSubmit={false}
                           value={answer}
                           onChangeText={answer => this.setState({answer})}/>
                <SubmitBtn text={'Submit'} onPress={this.submit.bind(this)}/>
            </ScrollView>
        );
    }
}

function mapStateToProps({}, {navigation}) {
    const {deck} = navigation.state.params;
    return {
        deck
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addCard: (deck, question, answer) => dispatch(addCard(deck, question, answer))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCardComponent);