import React from 'react';
import {connect} from 'react-redux';
import {FlatList, StyleSheet, View} from 'react-native';
import {DeckItem} from './DeckItem';
import {white} from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white
    },
});

class DeckListComponent extends React.Component {
    goToDeckDetails(deck) {
        this.props.navigation.navigate('DeckDetails', {deck});
    }

    render() {
        const {decks} = this.props;

        return (
            <View style={styles.container}>
                <FlatList data={decks}
                          keyExtractor={item => item.title}
                          renderItem={({item}) =>
                              <DeckItem deck={item} onSelect={this.goToDeckDetails.bind(this, item.title)}/>
                          }/>
            </View>
        );
    }
}

function mapStateToProps({decks}) {
    return {
        decks: Object.values(decks)
    };
}

export default connect(
    mapStateToProps
)(DeckListComponent);