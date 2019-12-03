import { combineReducers } from "redux";
import preExam from "./reducer.preExam";
import Exam from "./reducer.exam";


const rootReducer = combineReducers({
    preExam,
    Exam
})

export default rootReducer