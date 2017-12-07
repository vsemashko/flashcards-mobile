import {FontAwesome, MaterialIcons} from '@expo/vector-icons/index';
import React from 'react';
import {BackHandler} from 'react-native';
import {StackNavigator, TabNavigator, NavigationActions} from 'react-navigation';
import {black, purple, white} from '../utils/colors';
import DeckListComponent from '../components/deck/DeckListComponent';
import AddDeckComponent from '../components/deck/AddDeckComponent';
import DeckDetailsComponent from '../components/deck/DeckDetailsComponent';

const Tabs = TabNavigator({
    Decks: {
        screen: DeckListComponent,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({tintColor}) => <FontAwesome name='list-alt' size={25} color={tintColor}/>
        },
    },
    AddDeck: {
        screen: AddDeckComponent,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({tintColor}) => <MaterialIcons name='library-add' size={25} color={tintColor}/>
        },
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        showIcon: true,
        style: {
            height: 65,
            backgroundColor: black
        }
    }
});

export const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
    },
    DeckDetails: {
        screen: DeckDetailsComponent,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                height: 65,
                backgroundColor: black
            }
        }
    }
});