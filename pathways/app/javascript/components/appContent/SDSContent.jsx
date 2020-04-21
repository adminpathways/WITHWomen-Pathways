import {financePath, healthPath, housingPath, legalPath, socialSupportPath} from '../routes';

// ---------- Get action plans and priority items Start ----------

export const actionPlans = [
    {name: 'Social Support', icon: 'users'},
    {name: 'Finance', icon: 'dollar'},
    {name: 'Health', icon: 'heartbeat'},
    {name: 'Housing', icon: 'home'},
    {name: 'Legal', icon: 'gavel'}
];

// -- NOTE: It should be linked to id instead of names, and it will effect Action Plans component and detail apge.
export const actionPlanDetailPath = name => {
    switch (name) {
    case actionPlans[0].name:
        return socialSupportPath;
    case actionPlans[1].name:
        return financePath;
    case actionPlans[2].name:
        return healthPath;
    case actionPlans[3].name:
        return housingPath;
    case actionPlans[4].name:
        return legalPath;
    default:
        return '';
    }
};

export const myConcernItems = [];

for (let i = 0; i < actionPlans.length - 1; i++) {
    for (let j = i + 1; j < actionPlans.length; j++) {
        myConcernItems.push({one: actionPlans[i], two: actionPlans[j]});
    }
}