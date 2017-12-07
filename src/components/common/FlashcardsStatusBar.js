import {Constants} from 'expo';
import React from 'react';
import {StatusBar, View} from 'react-native';
import {black} from '../../utils/colors';

export default function FlashcardsStatusBar() {
    return (
        <View style={{backgroundColor: black, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={black} barStyle="light-content"/>
        </View>
    );
}