import {StyleSheet} from 'react-native';
import {white} from '../../utils/colors';

export const editDeckStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center'
    },
    title: {
        margin: 20,
        marginTop: 40,
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textInput: {
        height: 50,
        alignSelf: 'stretch',
        margin: 20,
        padding: 10,
        borderWidth: 2,
        borderRadius: 5
    }
});
