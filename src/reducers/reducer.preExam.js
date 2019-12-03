import * as actionType from './../constants';

const defaultState = {
    questionPaper:[]
}

const preExam = (state = defaultState, action) => {

    switch(action.type){
        case actionType.START_EXAM:
            return {
                ...state,
                questionPaper:action.payload
            }
        default:
            return state
    }

}

export default preExam;