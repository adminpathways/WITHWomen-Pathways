import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux';
import {actionPlanDetailPath} from '../appContent/SDSContent';
import {safetyPlanStepsPath} from '../routes';
import AudioContent from '../AudioContent';

class SafetyTips extends Component {
    render() {
        const {myConcernResult, dispatch} = this.props;
        let remainingConcerns = [];
        remainingConcerns = myConcernResult.slice(1, myConcernResult.length);

        return (
            <div>
                <div className='text-center'>
                    <h1>Safety Tips</h1>
                    <p>
            Here’s how you have ranked your concerns. Click below to explore
            tips related to the other priorities in your ranking.
                    </p>
                    <AudioContent path='safety_tips/Safety Tips_Tips after action plan_June12.mp3'/>
                </div>
                <div className='margin-top-2 margin-bottom-1'>
                    <ul
                        className='accordion small-11 medium-8 float-center'
                        data-accordion
                        data-allow-all-closed='true'
                        data-deep-link='true'
                        data-deep-link-smudge='true'
                        data-deep-link-smudge-delay='500'
                        data-multi-expand='true'
                        data-update-history='true'
                        id='deeplinked-accordion'
                    >
                        {remainingConcerns.map((value, index) =>
                            <li
                                className='accordion-item'
                                data-accordion-item
                                key={value.name}
                            >
                                <a
                                    className='accordion-title shadow right-arrow'
                                    onClick={() => {
                                        dispatch(push(actionPlanDetailPath(value.name), {
                                            parent: 'safety'
                                        }));
                                    }}
                                >
                                    <div className='grid-x align-middle' key={value.name}>
                                        <div className='small-1 cell primary-color'>
                                            {index + 1}
                                        </div>
                                        <div className='shrink cell small-2 medium-1 text-center'>
                                            <i
                                                className={`fa fa-${
                                                    value.actionPlan.icon
                                                } 2x primary-color`}
                                            />
                                        </div>
                                        <div className='shrink cell'>
                                            <h6 className='my-concern-title'>{value.name}</h6>
                                        </div>
                                    </div>
                                </a>
                            </li>)}
                    </ul>
                </div>

                <div className='grid-x margin-top-2 align-center-middle'>
                    <div className='cell large-5 small-10'>
                        <a
                            className='expanded button primary shadow'
                            onClick={() => dispatch(push(safetyPlanStepsPath))}
                        >
              More Safety Tips
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({assessmentData}) => {
    const {myConcernResult} = assessmentData;
    return {myConcernResult};
};

export default connect(mapStateToProps)(SafetyTips);

SafetyTips.propTypes = {
    dispatch: PropTypes.func.isRequired,
    myConcernResult: PropTypes.arrayOf(PropTypes.shape()).isRequired
};