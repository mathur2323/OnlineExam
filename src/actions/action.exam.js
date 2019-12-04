import * as actionType from './../constants';

export const answerSelected = (reqObj) => ({
    type:actionType.ANSWER_SELECTED,
    payload:reqObj
})

export const finalResult = (correctAnswers) => ({
    type:actionType.FINAL_RESULT,
    payload:correctAnswers
})