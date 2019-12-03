import * as actionType from './../constants';

const defaultState = {
    finalAnswers:[]
}

const Exam = (state = defaultState, action) => {
    switch(action.type){
        case actionType.ANSWER_SELECTED:
            return {
                ...state,
                finalAnswers:action.payload
            }

        default:
            return state;
    }
}

export default Exam