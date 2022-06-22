import { SET_HEAT_FLOW, SET_H0_ABOVE_THE_PIPE, SET_H0_UNDER_THE_PIPE, SET_RESISTANCE } from "./actions";

const initialState = {
    isCalculateStarted: false,
    heatFlow: null
  };



export const calculateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEAT_FLOW : 
      return {
        ...state,
        heatFlow: action.payload.heatFlow
    }
    case SET_RESISTANCE : 
      return {
        ...state,
        resistance: action.payload.resistance
    }
    case SET_H0_ABOVE_THE_PIPE : 
      return {
        ...state,
        h0AboveThePipe: action.payload.h0
    }
    case SET_H0_UNDER_THE_PIPE : 
      return {
        ...state,
        h0UnderThePipe: action.payload.h0
    }
    default:
      return state;
  }
};