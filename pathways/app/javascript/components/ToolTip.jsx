import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({title, description}) =>
    <span
        className='has-tip top'
        data-allow-html='true'
        data-disable-hover='true'
        data-tooltip
        tabIndex='2'
        title={description}>
        {title}
    </span>;

Tooltip.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Tooltip;