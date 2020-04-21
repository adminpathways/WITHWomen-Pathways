import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import HomeLayout from './AppLayout';
import $ from 'jquery';
import connect from 'react-redux/es/connect/connect';
import {push} from 'react-router-redux';
import {
    actionPlanPath,
    assessmentPath,
    assessmentResultPath,
    emergencyTipsPath,
    financePath,
    healthPath,
    housingPath,
    legalPath,
    myConcernsPath,
    myConcernsResultPath,
    safetyPlanPath,
    safetyPlanStepsPath,
    safetyTipsPath,
    setMyConcernsPath,
    socialSupportPath
} from '../routes';
import LeftMenu from '../LeftMenu';
import ReactGA from 'react-ga';

class LayoutWrapper extends React.PureComponent {
    static updateMeta(props) {
        if (props.title.length > 0) {
            document.title = props.title;
            $('meta[name=description]').attr('content', props.description);
            $('meta[property=\'og\\:title\']').attr('content', props.title);
            $('meta[property=\'og\\:description\']').attr('content', props.description);
            $('meta[property=\'og\\:url\']').attr('content', location.href);
        }
    }

    componentDidMount() {
        $(document).on('turbolinks:load', () => setTimeout(this.loadFoundation, 500));
        LayoutWrapper.updateMeta(this.props);
        ReactGA.pageview(location.pathname, [], this.props.title);
    }

    componentDidUpdate() {
        this.loadFoundation();
        this.redirectIfNotAccessible();
        LayoutWrapper.updateMeta(this.props);
        ReactGA.pageview(location.pathname, [], this.props.title);
    }

    loadFoundation = () => {
        $(document).foundation();
        $(document).on('touch tap touchstart', e => {
            if (!$(e.target).hasClass('has-tip')) {
                $('.has-tip').foundation('hide');
            }
        });
    };

    redirectIfNotAccessible = () => {
        const {dispatch, path, assessmentData} = this.props;
        const isAssessmentDone = assessmentData.answers.length !== 0;
        const isMyConcernsDone = assessmentData.myConcernResult.length !== 0;
        const afterAssessment = [myConcernsPath, setMyConcernsPath, assessmentResultPath];
        const afterMyConcerns = [actionPlanPath, financePath, healthPath, housingPath,
            legalPath, myConcernsResultPath, emergencyTipsPath, safetyPlanPath,
            safetyPlanStepsPath, safetyTipsPath, socialSupportPath];
        const checkAssessment = afterAssessment.indexOf(path) > -1;
        const checkPathMyConcerns = afterMyConcerns.indexOf(path) > -1;

        if (!isAssessmentDone && (checkAssessment || checkPathMyConcerns)) {
            dispatch(push(assessmentPath));
        }

        if (!isMyConcernsDone && checkPathMyConcerns) {
            dispatch(push(setMyConcernsPath));
        }
    };

    childAssessmentBar = () => {
        const {
            dispatch,
            path
        } = this.props;
        const tabs = [
            {title: 'My Concerns', link: myConcernsResultPath, childPaths: []},
            {
                title: 'Action Plan', link: actionPlanPath, childPaths: [
                    legalPath, financePath, socialSupportPath, housingPath, healthPath]
            },
            {
                title: 'Safety Tips', link: safetyTipsPath, childPaths: [
                    safetyTipsPath, safetyPlanStepsPath, emergencyTipsPath, '/safety-plan']
            }];
        const selectedIndex = tabs.findIndex(tab => tab.link === path || tab.childPaths.indexOf(path) > -1);
        return selectedIndex < 0 ? null
            : <ul
                className='grid-x tabs child-tab shadow'
                data-active-collapse='true' data-tabs id='collapsing-tabs'>
                {
                    tabs.map((tab, i) =>
                        <li className={`row tabs-title ${selectedIndex === i ? 'is-active' : ''}`}
                            key={tab.title}>
                            <a
                                aria-selected={selectedIndex === i ? 'true' : 'false'}
                                onClick={() => dispatch(push(tab.link))}
                            >
                                {tab.title}</a>
                        </li>)
                }
            </ul>;
    };

    topNavBar = () => {
        const {
            dispatch,
            path
        } = this.props;
        const tabs = [
            {title: 'Menu', link: '/not-available', childPaths: []},
            {title: 'Home', link: '/home', childPaths: ['/lock', '/hide-your-tracks', '/']},
            {title: 'Assessment', link: '/assessment', childPaths: []},
            {title: 'Did You Know?', link: '/did-you-know', childPaths: ['/planning', '/support']}];
        let selectedIndex = tabs.findIndex(tab => tab.link === path || tab.childPaths.indexOf(path) > -1);
        selectedIndex = selectedIndex < 0 ? 2 : selectedIndex;
        return (
            <div data-sticky-container>
                <div className='sticky' data-margin-top='0' data-sticky data-sticky-on='small'>
                    <ul className='grid-x tabs top-menu-tab'
                        data-active-collapse='true' id='collapsing-tabs'>
                        {
                            tabs.map((tab, i) =>
                                <li
                                    className={
                                        `${i === 0 ? 'no-border' : 'row'} tabs-title
                                        ${selectedIndex === i ? 'is-active' : ''}`}
                                    key={tab.title}>
                                    {i === 0
                                        ? <a
                                            data-open='off-canvas' style={{padding: '0.95rem 1.25rem'}}>
                                            <i className='fa fa-bars fa-2x'/></a>
                                        : <a
                                            aria-selected={selectedIndex === i ? 'true' : 'false'}
                                            onClick={() => dispatch(push(tab.link))}
                                        >{tab.title}</a>
                                    }
                                </li>)
                        }
                    </ul>
                </div>
            </div>
        );
    };

    render() {
        const {
            component: Component,
            layout: Wrapper,
            title,
            ...rest
        } = this.props;

        return (
            <Route
                {...rest}
                render={matchProps =>
                    <Wrapper
                        title={title}
                        {...matchProps}
                    >
                        <React.Fragment>
                            <div className='off-canvas-wrapper'>
                                <LeftMenu/>
                                <div className='off-canvas-content grid-container' data-off-canvas-content>
                                    {this.topNavBar()}
                                    {this.childAssessmentBar()}
                                    <div className='large-8 float-center body-content-container'>
                                        <Component {...matchProps}/>
                                    </div>
                                    <div className='quick-exit'>
                                        <a
                                            className='expanded button exit'
                                            href='https://www.google.com/'>
                                            Quick Exit
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    </Wrapper>
                }
            />
        );
    }
}

const mapStateToProps = ({assessmentData}) => ({
    assessmentData
});

export default connect(mapStateToProps)(LayoutWrapper);

LayoutWrapper.propTypes = {
    assessmentData: PropTypes.shape({
        answers: PropTypes.array
    }).isRequired,
    component: PropTypes.any,
    dispatch: PropTypes.func.isRequired,
    layout: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    path: PropTypes.string,
    title: PropTypes.string
};

LayoutWrapper.defaultProps = {
    component: null,
    path: '',
    layout: HomeLayout,
    title: ''
};