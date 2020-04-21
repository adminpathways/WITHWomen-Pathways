import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import actionPlanContent from '../appContent/ActionPlan';
import {actionPlanDetailPath} from '../appContent/SDSContent';
import AccordionContent from '../AccordionContent';
import {push} from 'react-router-redux';
import {actionPlanPath, safetyTipsPath} from '../routes';

class ActionPlanDetail extends React.Component {
    render() {
        const {dispatch, isTop, parent, match} = this.props;
        let parentRoute = '';
        let parentRouteName = '';

        if (parent === 'action') {
            parentRoute = actionPlanPath;
            parentRouteName = 'Action Plan';
        }
        else if (parent === 'safety') {
            parentRoute = safetyTipsPath;
            parentRouteName = 'Safety Tips';
        }

        const pageContent = actionPlanContent(dispatch)[match.path];

        return (
            <div>
                <h1 className='text-center'>{pageContent.title}</h1>
                {isTop && <p>{pageContent.topMyConcernText}</p>}
                {pageContent.topDescription}
                {pageContent.tabs && <AccordionContent content={pageContent.tabs}/>}
                {pageContent.bottomDescription}
                <div className='grid-x align-center-middle'>
                    <div className='cell large-5 small-10'>
                        <a
                            className='expanded button primary shadow'
                            onClick={() => dispatch(push(parentRoute))}
                        >
                            Back to {parentRouteName}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({assessmentData: {myConcernResult}}, ownProps) => ({
    parent: ownProps.location.state ? ownProps.location.state.parent : '',
    isTop: myConcernResult.slice(0, 2).filter(value =>
        actionPlanDetailPath(value.name) === ownProps.match.path).length > 0
});

export default connect(mapStateToProps)(ActionPlanDetail);

ActionPlanDetail.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isTop: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    parent: PropTypes.string.isRequired
};