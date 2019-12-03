import * as actionType from './../constants';

const defaultState = {
    questionPaper:[],
    timer:false
}

const preExam = (state = defaultState, action) => {

    switch(action.type){
        case actionType.START_EXAM:
            return {
                ...state,
                questionPaper:action.payload,
                timer:true
            }
        default:
            return state
    }

}

export default preExam;