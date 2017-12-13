import {AppLoading} from 'expo';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import './ReactotronConfig';
import {persistor, store} from './src/store';
import FlashcardsStatusBar from './src/components/common/FlashcardsStatusBar';
import {MainNavigator} from './src/navigators/AppNavigator';
import {setLocalNotification} from './src/utils/helpers';

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification();
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={<AppLoading/>}>
                    <View style={styles.container}>
                        <FlashcardsStatusBar/>
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
