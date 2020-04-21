import React from 'react';
import PropTypes from 'prop-types';

const AppLayout = ({children}) =>
    <div>
        {React.cloneElement(children, {className: 'content'})}
    </div>;

AppLayout.propTypes = {
    children: PropTypes.element.isRequired
};

export default AppLayout;