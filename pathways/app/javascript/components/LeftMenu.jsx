import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {
    actionPlanPath,
    assessmentPath,
    didYouKnowPath,
    hideYourTracksPath,
    safetyPlanStepsPath,
    setMyConcernsPath
} from './routes';

class LeftMenu extends React.PureComponent {
    menuItems = () => {
        const {assessmentData} = this.props;
        const childItems = [];

        if (assessmentData.answers.length !== 0) {
            childItems.push({title: 'My Concerns', icon: 'bullseye', to: setMyConcernsPath});
        }

        if (assessmentData.myConcernResult.length !== 0) {
            childItems.push({title: 'Action Plans', icon: 'tasks', to: actionPlanPath});
            childItems.push({title: 'Safety Tips', icon: 'sticky-note-o', to: safetyPlanStepsPath});
        }

        return [
            {title: 'Home', icon: 'home', to: '/home'},
            {title: 'Hide Your Tracks', icon: 'desktop', to: hideYourTracksPath},
            {title: 'Did You Know?', icon: 'book', to: didYouKnowPath},
            {title: 'Assessment', icon: 'bars', to: assessmentPath, childItems}
        ];
    };

    render() {
        return <div className='off-canvas position-left' data-off-canvas id='off-canvas'>
            <ul className='menu top-menu-tab'>
                <li className='menu-text'>
                    <img className='logo-image-white' src='images/logo-white.png'/>
                </li>
            </ul>
            <ul className='vertical menu'>
                {this.menuItems().map(item =>
                    <li key={item.title}>
                        <Link className='grid-x' data-close='off-canvas' to={item.to}>
                            <i className={`fa fa-${item.icon} cell small-2 text-center`}/>
                            <span className='cell'>{item.title}</span>
                        </Link>
                        {
                            item.childItems &&
                            <ul className='nested vertical menu'>
                                {item.childItems.map(childItem =>
                                    <li key={childItem.title}>
                                        <Link className='grid-x' data-close='off-canvas' to={childItem.to}>
                                            <i className={`fa fa-${childItem.icon} cell small-2 text-center`}/>
                                            <span className='cell'>{childItem.title}</span>
                                        </Link>
                                    </li>)}
                            </ul>
                        }
                    </li>)}
            </ul>
        </div>;
    }
}

const mapStateToProps = ({assessmentData}) => ({
    assessmentData
});

export default connect(mapStateToProps)(LeftMenu);

LeftMenu.propTypes = {
    assessmentData: PropTypes.shape({
        answers: PropTypes.array
    }).isRequired,
    dispatch: PropTypes.func.isRequired
};