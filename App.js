import './ReactotronConfig';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import StatusBar from './src/components/common/StatusBar';
import {darkblue} from './src/utils/colors';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/es/integration/react'
import {AppLoading} from 'expo';
import DeckListComponent from './src/components/deck/DeckListComponent';
import {addDeck, addQuestion} from './src/actions';


setTimeout(() => {
    if (!store.getState().decks['React']) {
        store.dispatch(addDeck('React'));
        store.dispatch(addQuestion('React', '?', '!'));
    }
    store.dispatch(addDeck('Redux'));
}, 3000);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={<AppLoading/>}>
                    <View style={styles.container}>
                        <StatusBar backgroundColor={darkblue} barStyle="light-content"/>
                        <DeckListComponent/>
                    </View>
                </PersistGate>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
