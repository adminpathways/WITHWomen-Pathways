import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux';
import AccordionContent from '../AccordionContent';
import emergencyPlanContent from '../appContent/EmergencyTips';
import {actionPlanPath} from '../routes';

const EmergencyTips = ({location: {hash}, dispatch, safetyPlanStepIds}) => {
    const filteredContent = emergencyPlanContent().filter(value =>
        value.linkedIds ? value.linkedIds.some(r => safetyPlanStepIds.indexOf(r) >= 0) : value);
    filteredContent.map(value => {
        if (value.tabs) {
            value.tabs = value.tabs.filter(tab =>
                !tab.linkedId || safetyPlanStepIds.indexOf(tab.linkedId) > -1);
        }

        return value;
    });

    return <div>
        <div className='text-center'>
            <h1>Emergency Tips</h1>
        </div>

        <AccordionContent content={filteredContent} hash={hash}/>

        <div className='grid-x align-center-middle margin-top-2'>
            <div className='cell large-5 small-10'>
                <a
                    className='expanded button clear'
                    onClick={() => dispatch(push(actionPlanPath))}
                    type='button'
                >
                    Back
                </a>
            </div>
        </div>
    </div>;
};

const mapStateToProps = ({assessmentData: {safetyPlanStepIds}}) => ({
    safetyPlanStepIds
});

export default connect(mapStateToProps)(EmergencyTips);

EmergencyTips.propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired,
    safetyPlanStepIds: PropTypes.arrayOf(PropTypes.number).isRequired
};