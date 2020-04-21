import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Foundation from 'foundation-sites';
import {push} from 'react-router-redux';
import {myConcernItems} from '../appContent/SDSContent';
import {setMyConcerns} from '../../reducers/assessment';
import * as _ from 'lodash-es';
import {myConcernsResultPath} from '../routes';
import {submitMyConcerns} from '../services/assessment';
import AudioContent from '../AudioContent';

const generateRandom = (min, max) => {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num === 50 ? generateRandom(min, max) : num;
};

class SetMyConcerns extends Component {
    state = {
        index: 0,
        sliderValue: generateRandom(40, 60),
        myConcerns: []
    };

    componentDidMount() {
        $('.slider').on('moved.zf.slider', () => {
            const sliderValue = parseInt($('.slider-handle').attr('aria-valuenow'), 0);

            if (sliderValue !== 50) {
                this.setState({sliderValue});
            }
        });
    }

    showAnswer = () => {
        const {index, myConcerns} = this.state;
        const answer = myConcerns[index * 2];
        const mySlider = new Foundation.Slider($('.slider'));

        mySlider._setHandlePos($('.slider-handle'),
            answer ? answer.value : generateRandom(40, 60));
    };

    nextAnswer = next => {
        const {index, myConcerns, sliderValue} = this.state;

        if (next) {
            const currentItem = myConcernItems[index];

            const newIndex = index * 2;
            myConcerns[newIndex] = {
                actionPlan: currentItem.one,
                value: 100 - sliderValue
            };
            myConcerns[newIndex + 1] = {
                actionPlan: currentItem.two,
                value: sliderValue
            };
        }

        this.setState({
            index: next ? index + 1 : index - 1,
            myConcerns
        }, () => this.showAnswer());
    };

    submitAnswers = () => {
        const {dispatch} = this.props;
        const {myConcerns} = this.state;

        const result = _.map(_.groupBy(myConcerns, 'actionPlan.name'), (objs, key) => ({
            name: key, actionPlan: objs[0].actionPlan, value: _.sumBy(objs, 'value')
        })).sort((a, b) => b.value - a.value);

        submitMyConcerns(result.map(value => ({category: value.name.toLowerCase(), score: value.value})));

        dispatch(setMyConcerns(result));
        dispatch(push(myConcernsResultPath));
    };

    render() {
        const {index, sliderValue} = this.state;
        const currentValue = index;
        const total = myConcernItems.length;
        const progress = currentValue / total * 100;
        const isLast = currentValue + 1 >= total;
        const currentItem = myConcernItems[index];

        return (
            <div className='text-center'>
                <div
                    aria-valuemax={total}
                    aria-valuemin='0'
                    aria-valuenow={currentValue}
                    className='progress rounded'
                    role='progressbar'>
                    <div className='progress-meter rounded' style={{width: `${progress}%`}}/>
                </div>
                <h6>customize</h6>
                <h1>My Concerns</h1>
                <p>
                    Move the slider closer to the issue that is more important to you
                </p>
                <h6>{`PAIR ${currentValue + 1} of ${total}`}</h6>
                <AudioContent path={`home/${currentValue + 1}.mp3`}/>
                <div className='margin-top-2 grid-x align-justify'>
                    <h5><b>
                        <i className={`fa fa-${currentItem.one.icon} 2x primary-color margin-right-1`}/>
                        {currentItem.one.name}</b></h5>
                    <h5>
                        <i className={`fa fa-${currentItem.two.icon} 2x primary-color margin-right-1`}/>
                        <b>{currentItem.two.name}</b></h5>
                </div>
                <div className='grid-x grid-margin-x'>
                    <div className='cell'>
                        <div className='slider' data-initial-start={sliderValue} data-slider>
                            <span
                                className='slider-handle' data-slider-handle role='slider' tabIndex='1'/>
                            <span className='slider-fill' data-slider-fill/>
                            <input className='slider-input' type='hidden'/>
                        </div>
                    </div>
                </div>
                <div className='grid-x align-justify'>
                    <h5><b>{100 - sliderValue}%</b></h5>
                    <h5><b>{sliderValue}%</b></h5>
                </div>
                <div className='grid-x align-center-middle'>
                    <div className='cell large-5 small-10 margin-top-2'>
                        <a
                            className='expanded button primary shadow'
                            onClick={() => isLast ? this.submitAnswers() : this.nextAnswer(true)}
                        >
                            {isLast ? 'Finish' : 'Next Pair'}
                        </a>
                        <button
                            className='expanded button clear'
                            disabled={index === 0}
                            onClick={() => this.nextAnswer(false)}
                            type='button'
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(SetMyConcerns);

SetMyConcerns.propTypes = {
    dispatch: PropTypes.func.isRequired
};