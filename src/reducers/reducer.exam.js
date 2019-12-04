import * as actionType from './../constants';

const defaultState = {
    finalAnswers:[],
    finalResult:null
}

const Exam = (state = defaultState, action) => {
    switch(action.type){
        case actionType.ANSWER_SELECTED:
            return {
                ...state,
                finalAnswers:action.payload
            }

        case actionType.FINAL_RESULT:
            return {
                ...state,
                finalResult:action.payload
            }

        default:
            return state;
    }
}

export default Exam