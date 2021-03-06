import React from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {SubmitBtn} from '../form-controls/SubmitBtn';
import {QuizScoreComponent} from './QuizScoreComponent';
import {FlipCardComponent} from './FlipCardComponent';
import {quizStyles as styles} from './QuizStyles';
import {clearQuizReminderLocalNotification, setQuizReminderLocalNotification} from '../../utils/helpers';


function getInitialState() {
    return {
        currentCardIndex: 0,
        correctAnswersCount: 0,
        isQuestion: true,
        isScoreScreen: false
    };
}

class QuizComponent extends React.Component {
    state = getInitialState();

    componentDidMount() {
        clearQuizReminderLocalNotification()
            .then(setQuizReminderLocalNotification);
    }

    submitQuestion(isCorrect) {
        const {cards} = this.props;
        const {currentCardIndex, correctAnswersCount} = this.state;
        const newCorrectAnswersCount = isCorrect ? correctAnswersCount + 1 : correctAnswersCount;

        if (currentCardIndex === cards.length - 1) {
            this.setState({
                isScoreScreen: true,
                correctAnswersCount: newCorrectAnswersCount
            })
        } else {
            this.setState({
                isQuestion: true,
                currentCardIndex: currentCardIndex + 1,
                correctAnswersCount: newCorrectAnswersCount
            })
        }
    }

    restartQuiz() {
        this.setState(getInitialState());
    }

    render() {
        const {cards, goBack} = this.props;
        const {currentCardIndex, isQuestion, isScoreScreen, correctAnswersCount} = this.state;

        if (cards.length === 0) return <Text>NONE</Text>;
        if (isScoreScreen) return <QuizScoreComponent correctAnswersCount={correctAnswersCount}
                                                      totalQuestionsCount={cards.length}
                                                      onRestart={() => this.restartQuiz()}
                                                      onClose={goBack}/>;

        const currentCard = cards[currentCardIndex];

        return (
            <View style={styles.container}>
                <Text style={styles.questionsCounter}>{currentCardIndex + 1}/{cards.length}</Text>
                <FlipCardComponent style={styles.cardContainer} card={currentCard}/>
                <View style={styles.bottomContainerSection}>
                    <SubmitBtn text={'Correct'} onPress={() => this.submitQuestion(true)} buttonStyle={styles.correctBtn}/>
                    <SubmitBtn text={'Incorrect'} onPress={() => this.submitQuestion(false)} buttonStyle={styles.incorrectBtn}/>
                </View>
            </View>
        );
    }
}

function mapStateToProps({decks, cards}, {navigation}) {
    const {deckId} = navigation.state.params;
    return {
        cards: decks[deckId].cards.map(card => cards[card])
    };
}

function mapDispatchToProps(dispatch, {navigation}) {
    return {
        goBack: () => navigation.goBack()
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuizComponent);