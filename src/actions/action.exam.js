import * as actionType from './../constants';

export const answerSelected = (reqObj) => ({
    type:actionType.ANSWER_SELECTED,
    payload:reqObj
})