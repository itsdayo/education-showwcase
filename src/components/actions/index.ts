export const ADD_SChOOL = 'ADD_SCHOOL'
export const DELETE_SCHOOL= 'DELETE_SCHOOL'
export type Action = {type:'ADD_SCHOOL', payload: string}
export type Action1 = {type:'DELETE_SCHOOL', payload: string}
export const addSchool = (data:any):Action => ({
  type: ADD_SChOOL,
  payload: data
})

export const deleteSchool = (data:any) => ({
  type: DELETE_SCHOOL,
  payload: data
})
