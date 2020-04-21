import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux';
import {actionPlanPath, setMyConcernsPath} from '../routes';
import AudioContent from '../AudioContent';

const MyConcernsResult = ({dispatch, myConcernResult}) =>
    <div>
        <div className='text-center'>
            <h6>Results</h6>
            <h1>My Concerns</h1>
            <AudioContent path='home/My Concerns_Results_April15.mp3'/>
            <p>
                This is how you ranked your concerns. You can use this list to help you decide
                which action plan to start with.
            </p>
            <p>
                Click below to see the action plan for your top concern
            </p>
        </div>
        <div className='margin-top-2 margin-bottom-1'>
            {
                myConcernResult.map((value, index) =>
                    <div
                        className='grid-x grid-margin-x align-center-middle margin-bottom-2' key={value.name}
                    >
                        <div className='small-1 cell primary-color'>{index + 1}</div>
                        <div className='small-1 cell'>
                            <i className={`fa fa-${value.actionPlan.icon} 2x primary-color`}/>
                        </div>
                        <div className='small-7 medium-4 shrink cell'>
                            <h6 className='my-concern-title-2'>{value.name}</h6>
                        </div>
                    </div>)
            }
        </div>
        <div className='grid-x align-center-middle'>
            <div className='cell large-5 small-10'>
                <a
                    className='expanded button primary shadow'
                    onClick={() => dispatch(push(actionPlanPath))}
                >
                    Continue to My Action Plan
                </a>
                <a
                    className='expanded button clear'
                    onClick={() => dispatch(push(setMyConcernsPath))}
                >
                    Reset My Concerns
                </a>
            </div>
        </div>
    </div>;

const mapStateToProps = ({assessmentData}) => {
    const {myConcernResult} = assessmentData;
    return {myConcernResult};
};

export default connect(mapStateToProps)(MyConcernsResult);

MyConcernsResult.propTypes = {
    dispatch: PropTypes.func.isRequired,
    myConcernResult: PropTypes.arrayOf(PropTypes.shape()).isRequired
};