import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux';
import {actionPlanDetailPath} from '../appContent/SDSContent';
import {emergencyTipsPath, safetyTipsPath} from '../routes';

class ActionPlan extends Component {
    render() {
        const {myConcernResult, dispatch} = this.props;
        let isMatch = false;
        let result = [];

        if (myConcernResult.length !== 0) {
            isMatch = myConcernResult[0].value === myConcernResult[1].value;
            result = myConcernResult.slice(0, isMatch ? 2 : 1);
        }

        return <div>
            <div className='text-center'>
                <h6>your</h6>
                <h1>Action Plan</h1>
                <p>
                    Based on your concerns we recommend the following plans:
                </p>
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
                    id='deeplinked-accordion'>
                    {
                        result.map(value =>
                            <li
                                className='accordion-item'
                                data-accordion-item
                                key={value.name}
                            >
                                <a className='accordion-title shadow right-arrow' onClick={() => {
                                    dispatch(push(actionPlanDetailPath(value.name),
                                        {parent: 'action'}));
                                }}>
                                    <div className='grid-x align-middle' key={value.name}>
                                        <div className='shrink cell small-2 medium-1 text-center'>
                                            <i className={`fa fa-${value.actionPlan.icon} 2x primary-color`}/>
                                        </div>
                                        <div className='shrink cell'>
                                            <h6 className='my-concern-title'>{value.name}</h6>
                                        </div>
                                    </div>
                                </a>
                            </li>)
                    }
                    <li className='accordion-item' data-accordion-item >
                        <a className='accordion-title shadow right-arrow'
                            onClick={() => dispatch(push(emergencyTipsPath))}>
                            <div className='grid-x align-middle'>
                                <div className='shrink cell small-2 medium-1 text-center'>
                                    <i className='fa fa-medkit 2x primary-color'/>
                                </div>
                                <div className='shrink cell'>
                                    <h6 className='my-concern-title'>Emergency Tips</h6>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='grid-x align-center-middle margin-top-3'>
                <div className='cell large-5 small-10'>
                    <a
                        className='expanded button primary shadow'
                        onClick={() => dispatch(push(safetyTipsPath))}
                    >
                        Continue to Safety Tips
                    </a>
                </div>
            </div>
        </div>;
    }
}

const mapStateToProps = ({assessmentData}) => {
    const {myConcernResult} = assessmentData;
    return {myConcernResult};
};

export default connect(mapStateToProps)(ActionPlan);

ActionPlan.propTypes = {
    dispatch: PropTypes.func.isRequired,
    myConcernResult: PropTypes.arrayOf(PropTypes.shape()).isRequired
};