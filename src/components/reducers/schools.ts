import { ADD_SChOOL } from "../actions"

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
type Action = {type:'ADD_SCHOOL', payload:string}

export const schoolReducer=(state:SchoolState | undefined = initialState, action:Action)=>{
  
  
  switch (action.type) { 
    
    case ADD_SChOOL:
        return {...state, schools:[...state.schools,action.payload]}

    default:
        return state;
      }
    

}