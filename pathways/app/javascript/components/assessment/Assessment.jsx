import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux';
import Tooltip from '../ToolTip';
import AudioContent from '../AudioContent';

const Assessment = ({dispatch}) =>
    <div className='text-center'>
        <h6>safety decision aid</h6>
        <h1>Assess, Prioritize, Plan</h1>
        <AudioContent path='assess_danger/Assess you Danger_Home Page_April15.mp3'/>
        <p>
            You are here because you have concerns about safety in your relationship.
            A relationship could go from being unsafe to dangerous if your partner or
            ex-partner’s behaviours towards you are getting worse over time. The level of danger in
            unsafe relationships can change very quickly. The most serious behaviour a partner or
            ex-partner can commit towards you is murder. While it’s hard to think about this,
            in some cases, it does happen. That’s why you should pay attention to the warning
            signs of danger.
        </p>
        <p>
            Answering these questions will help you do that. These questions can be upsetting.
            Take your time with them and take a break if you need. The best way to go through
            these questions is with a professional who can support you as you go along and
            help you plan what to do next. Find someone safe to talk with after, like a
            friend, family member or a <Tooltip description='Call the Assaulted Women’s
            Helpline, for free at 1-866-863-0511 or TTY 1-866-863-7868.<br/><br/>You can call any time to talk to
            someone who can support you.' title='professional'/>.
        </p>
        <p>
            Select &quot;Yes&quot; or &quot;No&quot; for each of the following questions.
            If a question doesn&apos;t apply to you, or you are unsure, please click &quot;No&quot;.
        </p>
        <div className='grid-x align-center-middle margin-top-3'>
            <div className='cell large-5 small-10'>
                <a
                    className='expanded button primary shadow'
                    onClick={() => dispatch(push('/quiz'))}
                >
                    Start Assessment
                </a>
            </div>
        </div>
    </div>;

export default connect()(Assessment);

Assessment.propTypes = {
    dispatch: PropTypes.func.isRequired
};