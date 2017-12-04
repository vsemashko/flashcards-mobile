import PropTypes from 'prop-types';
import React from 'react';
import {BackHandler, StyleSheet} from 'react-native';
import {addNavigationHelpers, NavigationActions, StackNavigator} from 'react-navigation';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
    header: {
        backgroundColor: darkblue
    }
});

export const AppNavigator = StackNavigator({
});

class AppWithNavigationState extends React.Component {
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        const {dispatch, nav} = this.props;
        if (nav.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const {dispatch, nav} = this.props;
        const navigation = addNavigationHelpers({
            dispatch,
            state: nav
        });

        return <AppNavigator navigation={navigation}/>;
    }
}

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
