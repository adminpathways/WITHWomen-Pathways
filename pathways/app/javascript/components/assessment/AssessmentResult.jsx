import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux';
import {assessmentResult, extremeDangerScore} from '../appContent/AssessmentResult';
import {myConcernsPath} from '../routes';
import AudioContent from '../AudioContent';

const AssessmentResult = ({dispatch, assessmentData: {totalPoints}}) => {
    const result = assessmentResult(totalPoints);
    return (
        <div>
            <div className='text-center'>
                <h6>Assessment Risk Result</h6>
                <h1>{result.title}</h1>
                {result.topDescription}
            </div>
            {
                totalPoints < extremeDangerScore &&
                <div className='grid-x align-center-middle margin-top-2 margin-bottom-2'>
                    <div className='cell large-5 small-10'>
                        <a
                            className='expanded button primary shadow'
                            onClick={() => dispatch(push(myConcernsPath))}
                        >
                            Next
                        </a>
                    </div>
                </div>
            }
            {result.bottomDescription}
            <footer>
                Your score is based on research that identified risk factors for severe or even deadly relationship
                violence. No one can predict what will happen in any one case, but being aware of dangerous behaviours
                is important. Be alert for signs of danger, and trust your instincts. Learn more about the danger
                assessment at <a href='https://www.dangerassessment.org/'>
                    https://www.dangerassessment.org/</a>
                <br/><br/>
                <AudioContent
                    path='assess_danger/Asses your Danger_Info about DA_Bottom on all results pages_April15.mp3'
                />
            </footer>

        </div>
    );
};

const mapStateToProps = ({assessmentData}) => ({
    assessmentData
});

export default connect(mapStateToProps)(AssessmentResult);

AssessmentResult.propTypes = {
    assessmentData: PropTypes.shape({
        answers: PropTypes.array,
        totalQuestions: PropTypes.number,
        yesCount: PropTypes.number,
        totalPoints: PropTypes.number
    }).isRequired,
    dispatch: PropTypes.func.isRequired
};