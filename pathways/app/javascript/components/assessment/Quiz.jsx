import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux';
import {setAssessmentData} from '../../reducers/assessment';
import {assessmentResultPath} from '../routes';
import {getScreenQuestions, submitAnswer} from '../services/assessment';
import * as _ from 'lodash-es';
import AudioContent from '../AudioContent';

class Quiz extends Component {
    state = {
        index: 0,
        answers: [],
        quizItems: [],
        loading: true,
        disableTouch: false
    };

    componentDidMount() {
        getScreenQuestions().then(quizItems => this.setState({loading: false, quizItems}));
    }

    selectAnswer(i) {
        const {index, answers, quizItems, disableTouch} = this.state;

        if (disableTouch) {
            return;
        }

        const selectedAnswers = answers.length === 0 ? Array(quizItems.length) : answers;
        const answer = quizItems[index].answers[i];
        selectedAnswers[index] = answer;

        submitAnswer(quizItems[index].id, answer.text); // Call api to save answer in database.

        this.setState({answers: selectedAnswers, disableTouch: true});
        setTimeout(() => {
            this.setState(this.nextAnswer(true));
        }, 500);
    }

    nextAnswer(isNext) {
        const {index, answers, quizItems} = this.state;

        const newIndex = isNext ? index + 1 : index - 1;

        if (newIndex >= quizItems.length) {
            const {dispatch} = this.props;
            dispatch(setAssessmentData({answers, ...this.getPoints()}));
            dispatch(push(assessmentResultPath));
            return;
        }

        this.setState({index: newIndex, disableTouch: false});
    }

    getPoints = () => {
        const {answers} = this.state;
        const answerObject = answers.map(answer => ({score: answer.score, yes: answer.text === 'Yes' ? 1 : 0}));

        const totalQuestions = answers.length;
        const yesCount = _.sumBy(answerObject, 'yes');
        const totalPoints = _.sumBy(answerObject, 'score');

        return {totalQuestions, yesCount, totalPoints};
    };

    render() {
        const {index, answers, quizItems, loading} = this.state;

        if (!loading && quizItems.length === 0) {
            return <div className='alert callout'>
                No questions were loaded. Does the database have quiz questions?
            </div>;
        }

        if (loading) {
            return null;
        }

        const currentQuiz = quizItems[index];

        const currentAnswer = answers[index] || -1;

        const currentValue = index + 1;
        const total = quizItems.length;
        const progress = index / total * 100;

        return (
            <div className='text-center'>
                <div
                    aria-valuemax={total}
                    aria-valuemin='0'
                    aria-valuenow={currentValue}
                    className='progress'
                    role='progressbar'>
                    <div className='progress-meter' style={{width: `${progress}%`}}/>
                </div>
                <h6>{`question ${currentValue} of ${total}`}</h6>
                <AudioContent path={`assess_danger/${currentQuiz.id}.mp3`}/>
                <p className='margin-bottom-2' style={{minHeight: 100}}>
                    {currentQuiz.text}
                </p>
                {
                    currentQuiz.answers.map((answer, i) =>
                        <div className='grid-x align-center-middle margin-top-1' key={answer.text}>
                            <div className='cell large-5 small-10'>
                                <a
                                    className={
                                        `expanded button shadow
                                        ${currentAnswer.text === answer.text ? 'primary' : 'hollow'}`
                                    }
                                    onClick={() => this.selectAnswer(i)}
                                >
                                    {answer.text}
                                </a>
                            </div>
                        </div>)
                }
                <div className='margin-top-3'>
                    <button
                        className='button clear float-left'
                        disabled={index === 0}
                        onClick={() => this.nextAnswer(false)}
                        type='button'
                    >
                        Back
                    </button>
                    <button
                        className='button clear float-right'
                        disabled={currentAnswer < 0}
                        onClick={() => this.nextAnswer(true)}
                        type='button'
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }
}

export default connect()(Quiz);

Quiz.propTypes = {
    dispatch: PropTypes.func.isRequired
};