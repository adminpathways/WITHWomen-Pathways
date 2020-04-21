import React from 'react';
import PropTypes from 'prop-types';

const AudioContent = ({path}) =>
    <span className='text-center'>
        <audio
            controls
            controlsList='nodownload'
            src={`/audio/${path}`}
            style={{width: '100%', maxWidth: '300px'}}
        />
    </span>;

export default AudioContent;

AudioContent.propTypes = {path: PropTypes.string.isRequired};