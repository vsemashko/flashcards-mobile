import React from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';


function AddDeckComponent({decks, questions}) {
    return (
        <View>
            <Text>{JSON.stringify(decks)}</Text>
            <Text>{JSON.stringify(questions)}</Text>
        </View>
    );
}

function mapStateToProps({decks, questions}) {
    return {decks, questions};
}

export default connect(
    mapStateToProps
)(AddDeckComponent);