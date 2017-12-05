import './ReactotronConfig';
import React from 'react';
import {AsyncStorage, StyleSheet, Text, View} from 'react-native';
import StatusBar from './src/components/common/StatusBar';
import {darkblue} from './src/utils/colors';
import {Provider} from 'react-redux';
import {store, persistor, FLASHCARDS_STORAGE_KEY} from './src/store';
import {PersistGate} from 'redux-persist/es/integration/react'
import {AppLoading} from 'expo';
import {addDeck, addQuestion} from './src/actions/index';


//store.dispatch(getDecks());

setTimeout(() => {

    if (!store.getState().decks['React']) {
        store.dispatch(addDeck('React'));
    }
    store.dispatch(addQuestion('React', '?', '!'));
}, 3000);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={<AppLoading/>}>
                    <View style={styles.container}>
                        <StatusBar backgroundColor={darkblue} barStyle="light-content"/>
                        <Text>{JSON.stringify(store.getState())}</Text>
                    </View>
                </PersistGate>
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
