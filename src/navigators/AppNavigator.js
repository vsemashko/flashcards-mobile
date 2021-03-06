import {FontAwesome, MaterialIcons} from '@expo/vector-icons/index';
import React from 'react';
import {StyleSheet} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {black, white} from '../utils/colors';
import DeckListComponent from '../components/deck/DeckListComponent';
import AddDeckComponent from '../components/deck/AddDeckComponent';
import DeckDetailsComponent from '../components/deck/DeckDetailsComponent';
import AddCardComponent from '../components/card/AddCardComponent';
import QuizComponent from '../components/quiz/QuizComponent';
import EditDeckComponent from '../components/deck/EditDeckComponent';
import CardListComponent from '../components/card/CardListComponent';
import EditCardComponent from '../components/card/EditCardComponent';

const styles = StyleSheet.create({
    headerStyle: {
        height: 65,
        backgroundColor: black
    }
});

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
        style: styles.headerStyle
    }
});

export const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
    },
    DeckDetails: {
        screen: DeckDetailsComponent,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.deckTitle}`,
            headerTintColor: white,
            headerStyle: styles.headerStyle
        })
    },
    EditDeck: {
        screen: EditDeckComponent,
        navigationOptions: {
            title: 'Edit Deck',
            headerTintColor: white,
            headerStyle: styles.headerStyle
        }
    },
    AddCard: {
        screen: AddCardComponent,
        navigationOptions: {
            title: 'Add Card',
            headerTintColor: white,
            headerStyle: styles.headerStyle
        }
    },
    EditCard: {
        screen: EditCardComponent,
        navigationOptions: {
            title: 'Edit Card',
            headerTintColor: white,
            headerStyle: styles.headerStyle
        }
    },
    CardList: {
        screen: CardListComponent,
        navigationOptions: {
            title: 'Cards List',
            headerTintColor: white,
            headerStyle: styles.headerStyle
        }
    },
    Quiz: {
        screen: QuizComponent,
        navigationOptions: {
            title: 'Quiz',
            headerTintColor: white,
            headerStyle: styles.headerStyle
        }
    }
});