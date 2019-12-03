import * as actionType from './../constants';

export const startExam = (reqObj) => ({
    type:actionType.START_EXAM,
    payload:reqObj
})