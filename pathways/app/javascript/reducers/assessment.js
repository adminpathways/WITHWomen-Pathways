/*
 * Actions
 */
const SET_ASSESSMENT = 'SET_ASSESSMENT';
const SET_MY_CONCERNS = 'SET_MY_CONCERNS';
const SET_SAFETY_PLAN = 'SET_SAFETY_PLAN';

/*
 * Action Creators
 */

export const setAssessmentData = data => ({
    type: SET_ASSESSMENT,
    data
});

export const setMyConcerns = myConcernResult => ({
    type: SET_MY_CONCERNS,
    data: {myConcernResult}
});

export const setSafetyPlan = data => ({
    type: SET_SAFETY_PLAN,
    data
});

/*
 * Reducers
 */

const initialUserData = {
    answers: [],
    totalQuestions: 0,
    yesCount: 0,
    totalPoints: 0,
    myConcernResult: [],
    safetyPlanStepIds: []
};

export const assessmentData = (state = initialUserData, action) => {
    switch (action.type) {
    case SET_ASSESSMENT:
        return {
            ...state,
            ...action.data
        };

    case SET_SAFETY_PLAN:
        return {
            ...state,
            safetyPlanStepIds: action.data
        };

    case SET_MY_CONCERNS: {
        return {
            ...state,
            ...action.data
        };
    }

    default:
        return state;
    }
};