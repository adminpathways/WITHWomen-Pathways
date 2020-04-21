import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux';
import {setMyConcernsPath} from '../routes';
import {actionPlans} from '../appContent/SDSContent';
import AudioContent from '../AudioContent';

const MyConcerns = ({dispatch}) =>
    <div>
        <div className='text-center'>
            <h6>MY CONCERNS</h6>
            <h1>Setting Your Concerns</h1>
            <AudioContent path='home/My concerns_Home Page_April15.mp3'/>
            <p>
                We all balance many areas of our life like housing, finances, families and our health. As we think
                about making change, knowing which areas are at the top of our list can help us decide where to start.
            </p>
            <p>
                <b>Pathways</b> helps you figure out what’s most important to you. The help and resources provided
                in Pathways will then be matched to your top concern. You&#39;ll be presented with two of these issues
                at a time.
            </p>
            {actionPlans.map(value =>
                <p key={value.name}>
                    <i className={`fa fa-${value.icon} 2x primary-color margin-right-1`}/>
                    <b>{value.name}</b>
                </p>)
            }
            <p>
                Move the slider closer to the issue that is more important to you. After you work through all ten of
                the scales, Pathways will give you an action plan that is tailored to your top concern.
                Some issues may be hard to prioritize. There are no right or wrong answers, just do your best.
                This is about learning what&#39;s important to you.
            </p>
        </div>
        <div className='grid-x align-center-middle margin-top-2'>
            <div className='cell large-5 small-10'>
                <a
                    className='expanded button primary shadow margin-bottom-2'
                    onClick={() => dispatch(push(setMyConcernsPath))}
                >
                    Set My Concerns
                </a>
            </div>
        </div>
    </div>;

const mapStateToProps = ({assessmentData}) => ({
    assessmentData
});

export default connect(mapStateToProps)(MyConcerns);

MyConcerns.propTypes = {
    assessmentData: PropTypes.shape({
        totalQuestions: PropTypes.number,
        yesCount: PropTypes.number,
        myConcernResult: PropTypes.array
    }).isRequired,
    dispatch: PropTypes.func.isRequired
};