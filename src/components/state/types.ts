export const ADD_SCHOOL = 'ADD_SCHOOL'
export const DELETE_SCHOOL = 'DELETE_SCHOOL'

interface AddSchoolAction {
  type: typeof ADD_SCHOOL
  payload: string
}

interface DeleteSchoolAction {
  type: typeof DELETE_SCHOOL
  payload: string
}
export type SchoolActionTypes = AddSchoolAction | DeleteSchoolAction