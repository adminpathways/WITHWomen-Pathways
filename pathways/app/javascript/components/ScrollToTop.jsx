import React from 'react';
import {animateScroll} from 'react-scroll';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            animateScroll.scrollToTop({duration: 300});
        }
    }

    render() {
        return this.props.children;
    }
}

ScrollToTop.propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired
};

export default withRouter(ScrollToTop);