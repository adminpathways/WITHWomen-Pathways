import React from 'react';
import PropTypes from 'prop-types';
import AccordionContent from '../AccordionContent';
import HYTContent from '../appContent/HideYourTracks';
import AudioContent from '../AudioContent';

const HideYouTracks = ({location: {hash}}) =>
    <div>
        <div className='text-center'>
            <h1>hide your tracks</h1>
        </div>
        <AudioContent path='hide_tracks/Hide your Tracks_Intro Text_April15.mp3'/>
        <p>
            Are you concerned your partner might be monitoring your use of the computer and your online
            activities?<br/><br/>
            While it is true that you leave tracks behind when you use the internet, there are a number of steps
            you can take to increase your safety and privacy online.<br/><br/>
            Familiarize yourself with the information given below to understand what cookies and cache are, what’s
            meant by the ‘Do Not Track’ preference, and how these work.<br/><br/>
            Once you have read that information, select the browser you use on your computer to find out a list of
            steps you can take to increase your privacy online. All these browsers offer features like private
            browsing, Do Not Track preference, deleting cookies and more to prevent your partner from monitoring your
            online activity.
        </p>
        <AccordionContent content={HYTContent} hash={hash}/>
    </div>;

export default HideYouTracks;

HideYouTracks.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired
};