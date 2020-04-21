import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux';
import {safetyPlanSteps} from '../appContent/SafetyPlan';
import {safetyPlanPath, safetyTipsPath} from '../routes';
import {setSafetyPlan} from '../../reducers/assessment';
import AudioContent from '../AudioContent';

class SafetyPlanSteps extends Component {
    state = {
        selected: []
    };

    static getDerivedStateFromProps(props) {
        return {selected: props.safetyPlanStepIds};
    }

    render() {
        const {dispatch} = this.props;
        const {selected} = this.state;
        selected.pop();
        return (
            <div>
                <div className='text-center'>
                    <h6>General</h6>
                    <h1>Safety Tips</h1>
                </div>
                <p>
          You can increase your safety in many areas of your life. Click below
          to explore more safety tips.
                </p>
                <AudioContent path='safety_tips/Safety Tips_Second Safety Tips Page_June12.mp3'/>
                {safetyPlanSteps.map(step =>
                    <div
                        className='grid-x align-center-middle margin-top-1'
                        key={step.id}
                    >
                        <div className='cell large-5 small-8'>
                            <a
                                className={`expanded button ${
                                    selected.indexOf(step.id) > -1 ? 'primary' : 'hollow'
                                } shadow`}
                                onClick={() => {
                                    const index = selected.indexOf(step.id);

                                    if (index > -1) {
                                        selected.splice(index, 1);
                                    }
                                    else {
                                        selected.push(step.id);
                                    }

                                    this.setState({selected});
                                    dispatch(setSafetyPlan(selected));
                                    dispatch(push(safetyPlanPath));
                                }}
                            >
                                {step.title}
                            </a>
                        </div>
                    </div>)
                }
                <div className='grid-x align-center-middle margin-top-2'>
                    <div className='cell large-6 small-10'>
                        <a
                            className='expanded button clear'
                            onClick={() => dispatch(push(safetyTipsPath))}
                            type='button'
                        >
              Back
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({assessmentData: {safetyPlanStepIds}}) => ({
    safetyPlanStepIds
});

export default connect(mapStateToProps)(SafetyPlanSteps);

SafetyPlanSteps.propTypes = {
    dispatch: PropTypes.func.isRequired,
    safetyPlanStepIds: PropTypes.arrayOf(PropTypes.number).isRequired
};