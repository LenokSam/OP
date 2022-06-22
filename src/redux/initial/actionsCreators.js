import { GET_INITIAL_DATA_REQUEST, SET_INITIAL_DATA, SET_CONSTRUCTION_ABOVE_THE_PIPE, SET_CONSTRUCTION_UNDER_THE_PIPE, GET_CONSTRUCTION_DATA_REQUEST } from "./actions"

export const setInitialData = (speed, tfloor, tair, tmax, isCalculateStarted, step, diameter, square, contours, supplyLength, delta) => (
  { type:SET_INITIAL_DATA, 
    payload:{
      speed, 
      tfloor, 
      tair, 
      tmax, 
      isCalculateStarted, 
      step, 
      diameter,
      square,
      contours,
      supplyLength, 
      delta
    }}
  )
export const setInitialDataRequest = (isCalculateStarted) => (
  { 
    type:GET_INITIAL_DATA_REQUEST, 
    payload:{isCalculateStarted}
  })
export const setConstuctuionAboveThePipe = (count, thickness, transcalency,name) => (
  { 
    type:SET_CONSTRUCTION_ABOVE_THE_PIPE, 
    payload:{count, thickness, transcalency,name}
  })
export const setConstuctuionUnderThePipe = (count, thickness, transcalency,name) => (
  { 
    type:SET_CONSTRUCTION_UNDER_THE_PIPE, 
    payload:{count, thickness, transcalency,name}
  })
export const setConstructionDataRequest = (isConstructionReceived) => (
  { 
    type:GET_CONSTRUCTION_DATA_REQUEST, 
    payload:{isConstructionReceived}
  })