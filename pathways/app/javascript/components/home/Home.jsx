import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux';
import {assessmentPath, didYouKnowPath, hideYourTracksPath} from '../routes';
import ContactForm from './ContactForm';
import AudioContent from '../AudioContent';

const Home = ({dispatch}) =>
    <div className='text-center'>
        <img src='/images/logo.png'/>
        <div className='margin-top-1 margin-bottom-2'>
            <h1>Get Started</h1>
            <p>
                <b>Pathways</b> helps people who are in unsafe romantic relationships increase their safety.
                To get started with the first assessment, select <b>Assess your
                Danger</b>.
            </p>
            <AudioContent path='home/Home_Page_Get Started_April15.mp3'/>
            <div className='grid-x align-center-middle margin-top-2'>
                <div className='cell large-5 small-10'>
                    <a
                        className='expanded button primary shadow button-large'
                        onClick={() => dispatch(push(assessmentPath))}
                    >
                        Assess your Danger
                    </a>
                </div>
            </div>
        </div>
        <div className='margin-top-3 margin-bottom-2'>
            <h1>Did You Know?</h1>
            <p>If you want to learn more about what makes relationships unsafe in general:</p>
            <p><AudioContent path='home/Home_Page_Did you Know_April15.mp3'/></p>
            <a
                className='medium button hollow shadow'
                onClick={() => dispatch(push(didYouKnowPath))}
            >
                Did You Know?
            </a>
        </div>
        <div className='margin-top-3 margin-bottom-2'>
            <h1>Hide Your Tracks</h1>
            <p>
                Learn how to avoid being tracked across the internet.
            </p>
            <p><AudioContent path='home/Home_Page_Hide your Tracks_April15.mp3'/></p>
            <a
                className='medium button hollow shadow'
                onClick={() => dispatch(push(hideYourTracksPath))}
            >
                Hide Your Tracks
            </a>
        </div>
        <div className='margin-top-3 margin-bottom-2'>
            <h1>WITHWomen Screener</h1>
            <p>
                If you aren&#39;t yet sure whether your own relationship is unsafe, take the <b>WITHWomen Screener</b>.
            </p>
            <a
                className='medium button hollow shadow'
                href='https://withwomen.ca/'
            >
                Take the WITHWomen Screener
            </a>
        </div>
        <div className='margin-top-3 margin-bottom-2'>
            <h1>About Us</h1>
            <p>
                Researchers from MAP Centre of Urban Health Solutions at St. Michael&#39;s Hospital
                created <b>Pathways</b> using input from women who have been in unsafe relationships. This was based on
                the latest research and designed with feedback from a diverse group of women.<br/>
                We are always looking at ways to make this website better. If you have any questions or
                comments for us, get in touch through the contact us page below.
            </p>
            <AudioContent path='home/Home_Page_About Us_April15.mp3'/>
        </div>
        <div className='margin-top-3 margin-bottom-2'>
            <h1>Contact Us</h1>
            <p>
                Do you have any questions or comments about <b>Pathways</b>? Get in touch with us
            </p>
            <AudioContent path='home/Home_Page_Contact us_April15.mp3'/>
            <ContactForm/>
        </div>
    </div>;

export default connect()(Home);

Home.propTypes = {
    dispatch: PropTypes.func.isRequired
};