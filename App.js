import {AppLoading} from 'expo';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import './ReactotronConfig';
import {addDeck, addQuestion} from './src/actions';
import StatusBar from './src/components/common/StatusBar';
import {MainNavigator} from './src/navigators/AppNavigator';
import {persistor, store} from './src/store';
import {darkblue} from './src/utils/colors';


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
                        <MainNavigator/>
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
