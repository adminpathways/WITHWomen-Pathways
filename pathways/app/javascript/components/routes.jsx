import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Switch, withRouter} from 'react-router-dom';
import LayoutWrapper from './layouts/LayoutWrapper';
import Home from './home/Home';
import Assessment from './assessment/Assessment';
import AssessmentResult from './assessment/AssessmentResult';
import Quiz from './assessment/Quiz';
import SetMyConcerns from './assessment/SetMyConcerns';
import MyConcernsResult from './assessment/MyConcernsResult';
import MyConcerns from './assessment/MyConcerns';
import ActionPlan from './assessment/ActionPlan';
import SafetyPlan from './assessment/SafetyPlan';
import SafetyPlanSteps from './assessment/SafetyPlanSteps';
import DidYouKnow from './didYouKnow/DidYouKnow';
import HideYouTracks from './hideYourTracks/HideYourTracks';
import ActionPlanDetail from './assessment/ActionPlanDetail';
import SafetyTips from './assessment/SafetyTips';
import EmergencyTips from './assessment/EmergencyTips';

const hideYourTracksPath = '/hide-your-tracks';
const didYouKnowPath = '/did-you-know';
const actionPlanPath = '/action-plan';
const legalPath = '/action-plan-legal';
const financePath = '/action-plan-finance';
const socialSupportPath = '/action-plan-social-support';
const housingPath = '/action-plan-housing';
const healthPath = '/action-plan-health';
const safetyPlanPath = '/safety-plan';
const safetyPlanStepsPath = '/safety-plan-steps';
const myConcernsResultPath = '/my-concerns-result';
const setMyConcernsPath = '/set-my-concerns';
const assessmentResultPath = '/assessment-result';
const myConcernsPath = '/my-concerns';
const assessmentPath = '/assessment';
const safetyTipsPath = '/safety-tips';
const emergencyTipsPath = '/emergency-tips';

export {
    hideYourTracksPath,
    didYouKnowPath,
    actionPlanPath,
    legalPath,
    financePath,
    socialSupportPath,
    housingPath,
    healthPath,
    safetyPlanPath,
    safetyPlanStepsPath,
    myConcernsResultPath,
    setMyConcernsPath,
    assessmentResultPath,
    myConcernsPath,
    assessmentPath,
    safetyTipsPath,
    emergencyTipsPath
};

const Routes = ({location}) =>
    <Switch location={location}>
        <LayoutWrapper
            component={Home}
            description='Pathways is a website that provides tailored information for taking action around safety.'
            path='/home'
            title='WITHWomen Pathways'
        />
        <LayoutWrapper
            component={Assessment}
            description='The following questions help determine your risk of being seriously harmed.'
            path='/assessment'
            title='Assessment'
        />
        <LayoutWrapper
            component={Quiz}
            description='Answer the following questions to determine your level of risk. '
            path='/quiz'
            title='Assessment Questions'
        />
        <LayoutWrapper
            component={AssessmentResult}
            description='Your results are based on the questions you completed. Continue using this website to
                        find further information and resources.'
            path={assessmentResultPath}
            title='Assessment Result'
        />
        <LayoutWrapper
            component={MyConcerns}
            description='Complete this activity to get a ranking of issues most important to you.'
            path={myConcernsPath}
            title='My Concerns (Information Page)'
        />
        <LayoutWrapper
            component={SetMyConcerns}
            description='You are being presented with two issues at a time. Move the slider closer to
                        the issue more important to you.'
            path={setMyConcernsPath}
            title='Set My Concerns'
        />
        <LayoutWrapper
            component={MyConcernsResult}
            description='Your ranking of issues will guide the options next presented to you. '
            path={myConcernsResultPath}
            title='My Concerns Result'
        />
        <LayoutWrapper
            component={ActionPlan}
            description='The following action plan reflects your top concern.'
            path={actionPlanPath}
            title='Action Plan'
        />
        <LayoutWrapper
            component={ActionPlanDetail}
            description='Based on your top concern, the legal action plan is recommended for you.'
            path={legalPath}
            title='Action Plan Legal'
        />
        <LayoutWrapper
            component={ActionPlanDetail}
            description='Based on your top concern, the social support action plan is recommended for you.'
            path={socialSupportPath}
            title='Action Plan Social Support'
        />
        <LayoutWrapper
            component={ActionPlanDetail}
            description='Based on your top concern, the health action plan is recommended for you.'
            path={healthPath}
            title='Action Plan Health'
        />
        <LayoutWrapper
            component={ActionPlanDetail}
            description='Based on your top concern, the finance action plan is recommended for you.'
            path={financePath}
            title='Action Plan Finance'
        />
        <LayoutWrapper
            component={ActionPlanDetail}
            description='Based on your top concern, the housing action plan is recommended for you.'
            path={housingPath}
            title='Action Plan Housing'
        />
        <LayoutWrapper
            component={SafetyPlanSteps}
            description='Select those issues that apply to you. '
            path={safetyPlanStepsPath}
            title='Safety Tips (Steps Selection)'
        />
        <LayoutWrapper
            component={SafetyPlan}
            description='These are important tips to keep you and your family safe.'
            path={safetyPlanPath}
            title='Safety Plan'
        />
        <LayoutWrapper
            component={DidYouKnow}
            description='Information provided to help you or someone you are about learn more about …'
            path={didYouKnowPath}
            title='Did You Know'
        />
        <LayoutWrapper
            component={HideYouTracks}
            description=''
            path={hideYourTracksPath}
            title='Hide Your Tracks'
        />
        <LayoutWrapper
            component={SafetyTips}
            description='Safety Tips'
            path={safetyTipsPath}
            title='Safety Tips'
        />
        <LayoutWrapper
            component={EmergencyTips}
            description='Emergency Tips'
            path={emergencyTipsPath}
            title='Emergency tips'
        />
        <LayoutWrapper
            component={Home}
            description='Information is provided to help you stay safe online.'
            path='/'
            title='Home'
        />
        <Redirect to='/'/>
    </Switch>;

export default withRouter(Routes);

Routes.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired
};