import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux';
import AccordionContent from '../AccordionContent';
import safetyPlanContent, {
    mountsinaiSafetyURL,
    pcawaSafetyURL
} from '../appContent/SafetyPlan';
import {safetyPlanStepsPath} from '../routes';
import AudioContent from '../AudioContent';

const SafetyPlan = ({location: {hash}, dispatch, safetyPlanStepIds}) => {
    const filteredContent = safetyPlanContent().filter(value =>
        value.linkedIds
            ? value.linkedIds.some(r => safetyPlanStepIds.indexOf(r) >= 0)
            : value);
    filteredContent.map(value => {
        if (value.tabs) {
            value.tabs = value.tabs.filter(tab => !tab.linkedId || safetyPlanStepIds.indexOf(tab.linkedId) > -1);
        }

        return value;
    });

    return (
        <div>
            <div className='text-center'>
                <h6>General</h6>
                <h1>{filteredContent[0].title}</h1>
            </div>

            <AccordionContent content={filteredContent} hash={hash}/>
            <footer>
        These safety plans have been adapted from the following resources:
                <ul>
                    <li>
                        <a href={pcawaSafetyURL}>
              Creating a safety plan by Peel Committee Against Woman Abuse
                        </a>
                    </li>
                    <li>
                        <a href={mountsinaiSafetyURL}>
              Creating a safety plan by Mount Sinai Hospital
                        </a>
                    </li>
                </ul>
        For detailed safety plans, refer to these resources.
                <br/>
                <br/>
        For more personalized safety plans, see a professional who can help you
        plan for your safety by considering your personal circumstances.
                <br/>
                <br/>
                <AudioContent path='safety_plans/Safety Planning_End Text_April22.mp3'/>
            </footer>
            <div className='grid-x align-center-middle margin-top-2'>
                <div className='cell large-5 small-10'>
                    <a
                        className='expanded button clear'
                        onClick={() => dispatch(push(safetyPlanStepsPath))}
                        type='button'
                    >
            Back
                    </a>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({assessmentData: {safetyPlanStepIds}}) => ({
    safetyPlanStepIds
});

export default connect(mapStateToProps)(SafetyPlan);

SafetyPlan.propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired,
    safetyPlanStepIds: PropTypes.arrayOf(PropTypes.number).isRequired
};