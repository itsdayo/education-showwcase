
import {ADD_SCHOOL,DELETE_SCHOOL, SchoolActionTypes } from './../state/types'

export const addSchool = (data:any):SchoolActionTypes => ({
  type: ADD_SCHOOL,
  payload: data
})

export const deleteSchool = (data:any):SchoolActionTypes => ({
  type: DELETE_SCHOOL,
  payload: data
})
