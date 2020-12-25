export const ADD_SCHOOL = 'ADD_SCHOOL'
export const DELETE_SCHOOL = 'DELETE_SCHOOL'

interface AddSchoolActionAction {
  type: typeof ADD_SCHOOL
  payload: string
}


export type ChatActionTypes = AddSchoolActionAction