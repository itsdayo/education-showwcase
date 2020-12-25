
import {ADD_SCHOOL,DELETE_SCHOOL,SchoolActionTypes} from './../state/types'

export interface SchoolState{
  schools:SchoolType[],
}
type SchoolType={
  name: string,
  degree:string,
  studyField:string,
  yearStarted: number,
  yearEnded:number,
  GPA:number,
  desc:string



}

const initialState={
  schools:[]
}


export const schoolReducer=(state:SchoolState | undefined = initialState, action:SchoolActionTypes)=>{
  
  
  switch (action.type) { 
    
    case ADD_SCHOOL:
        return {...state, schools:[...state.schools,action.payload]}
    case DELETE_SCHOOL:
      let arr1 = state.schools as any
            
      let m = arr1.indexOf(action.payload)
            arr1.splice(m, 1)
    
            return { ...state, schools: arr1 }
   

    default:
        return state;
      }
    

}