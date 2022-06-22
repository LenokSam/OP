import { GET_INITIAL_DATA_REQUEST, SET_INITIAL_DATA, SET_CONSTRUCTION_ABOVE_THE_PIPE, SET_CONSTRUCTION_UNDER_THE_PIPE, GET_CONSTRUCTION_DATA_REQUEST } from './actions';

const initialState = {
    isCalculateStarted: false,
    conditions:{},
    isConstructionReceived: false,
    construction:{
      abovePipe:[],
      underPipe:[]
    }
}
export const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_DATA : 
      return {
        ...state,
        conditions:{
          speed: action.payload.speed,
          tfloor: action.payload.tfloor,
          tair: action.payload.tair,
          tmax: action.payload.tmax,
          step: action.payload.step,
          diameter: action.payload.diameter,
          square: action.payload.square,
          contours: action.payload.contours,
          supplyLength: action.payload.supplyLength,
          delta: action.payload.delta,
        },
        isCalculateStarted: action.payload.isCalculateStarted
      }
    case GET_INITIAL_DATA_REQUEST : 
    return {
      ...state,
      isCalculateStarted: action.payload.isCalculateStarted
    }
    case GET_CONSTRUCTION_DATA_REQUEST : 
    return {
      ...state,
      isConstructionReceived: action.payload.isConstructionReceived
    }
    case SET_CONSTRUCTION_ABOVE_THE_PIPE : 
    return {
      ...state,
      construction:{...state.construction, abovePipe: [ ...state.construction.abovePipe, {
        count: action.payload.count,
        thickness: action.payload.thickness,
        transcalency: action.payload.transcalency,
        name: action.payload.name,
        h0: Math.ceil((action.payload.thickness/action.payload.transcalency*1.16)*100)/100
      }],}
    }
    case SET_CONSTRUCTION_UNDER_THE_PIPE : 
    return {
      ...state,
      construction:{...state.construction, underPipe: [ ...state.construction.underPipe, {
        count: action.payload.count,
        thickness: action.payload.thickness,
        transcalency: action.payload.transcalency,
        name: action.payload.name,
        h0: Math.ceil((action.payload.thickness/action.payload.transcalency*1.16)*100)/100
      }],}
    }

    default:
      return state;
  }
};
