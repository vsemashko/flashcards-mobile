import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StatusBar from './src/components/common/StatusBar';
import {darkblue} from './src/utils/colors';
import {Provider} from 'react-redux';
import store from './src/store';
import {addQuestion, DECKS_STORAGE_KEY, getDecks} from './src/actions/index';
import {setDummyData} from './src/utils/_dummy-data';
import {AsyncStorage} from 'react-native';
import {generateId} from './src/utils/helpers';

setDummyData();

store.dispatch(getDecks());

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <StatusBar backgroundColor={darkblue} barStyle="light-content"/>
                    <Text>qwe</Text>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
