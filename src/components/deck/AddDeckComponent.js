import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {addDeck} from '../../actions';
import {SubmitBtn} from '../form-controls/SubmitBtn';
import {white} from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white
    },
    title: {
        margin: 20,
        marginTop: 40,
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textInput: {
        margin: 20,
        padding: 10,
        height: 50,
        borderWidth: 2,
        borderRadius: 5
    }
});

class AddDeckComponent extends React.Component {
    state = {
        deck: ''
    };

    submit() {
        this.props.addDeck(this.state.deck);
        this.setState({deck: ''});
        this.props.navigation.navigate('Decks');
    }

    render() {
        const {deck} = this.state;
        const {addDeck} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput style={styles.textInput}
                           placeholder='Deck Title' autofocus={true}
                           value={deck}
                           onChangeText={text => this.setState({deck: text})}/>
                <SubmitBtn text={'Submit'} onPress={this.submit.bind(this)}/>
            </View>
        );
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        addDeck: deck => dispatch(addDeck(deck))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDeckComponent);