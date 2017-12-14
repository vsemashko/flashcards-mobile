import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {FlipCardItem} from './FlipCardItem';

const styles = StyleSheet.create({
    flipCard: {
        flex: 1,
        justifyContent: 'center'
    }
});

export class FlipCardComponent extends React.Component {
    state = {
        animatedValue: new Animated.Value(0),
        currentRotationValue: 0
    };

    componentWillMount() {
        this.state.animatedValue.addListener(({value}) => {
            this.setState({currentRotationValue: value});
        });
    }

    componentWillUnmount() {
        this.state.animatedValue.removeAllListeners();
    }

    componentWillReceiveProps() {
        this.state.animatedValue.setValue(0);
    }

    flipCard() {
        const {animatedValue, currentRotationValue} = this.state;
        Animated.spring(animatedValue, {
            toValue: currentRotationValue < 90 ? 180 : 0,
            friction: 8,
            tension: 10
        }).start();
    }

    render() {
        const {animatedValue, currentRotationValue} = this.state;
        const {card, style} = this.props;

        const frontAnimatedStyle = FlipCardComponent.getFrontAnimatedStyle(animatedValue);
        const backAnimatedStyle = FlipCardComponent.getBackAnimatedStyle(animatedValue);

        return (
            <View style={style}>
                {currentRotationValue <= 90 && <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
                    <FlipCardItem title='Question' content={card.question} onPress={() => this.flipCard()}/>
                </Animated.View>}
                {currentRotationValue > 90 && <Animated.View style={[styles.flipCard, backAnimatedStyle]}>
                    <FlipCardItem title='Answer' content={card.answer} onPress={() => this.flipCard()}/>
                </Animated.View>}
            </View>
        );
    }

    static getFrontAnimatedStyle(animatedValue) {
        return {
            transform: [{
                rotateY: animatedValue.interpolate({
                    inputRange: [0, 180],
                    outputRange: ['0deg', '180deg']
                })
            }]
        };
    }

    static getBackAnimatedStyle(animatedValue) {
        return {
            transform: [{
                rotateY: animatedValue.interpolate({
                    inputRange: [0, 180],
                    outputRange: ['180deg', '360deg']
                })
            }]
        };
    }
}

FlipCardComponent.propTypes = {
    card: PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired
    }).isRequired,
    style: PropTypes.any
};