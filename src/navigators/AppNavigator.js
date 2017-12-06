import {FontAwesome, Ionicons} from '@expo/vector-icons/index';
import React from 'react';
import {Platform, Text} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import DeckListScreen from '../components/deck/DeckListScreen';
import {purple, white} from '../utils/colors';


export default class SCR extends React.Component {
    render() {
        return <Text>SCR2</Text>;
    }
}

const Tabs = TabNavigator({
    HH: {
        screen: <DeckListScreen/>,
        navigationOptions: {
            tabBarLabel: 'EE',
            tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
        },
    },
    AddEntry: {
        screen: <SCR/>,
        navigationOptions: {
            tabBarLabel: 'Add Entry',
            tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
        },
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? purple : white,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? white : purple,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
});

export const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
    },
    EntryDetail: {
        screen: <SCR/>,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    }
});