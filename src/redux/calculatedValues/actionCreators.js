import { SET_HEAT_FLOW, SET_H0_ABOVE_THE_PIPE, SET_H0_UNDER_THE_PIPE, SET_RESISTANCE } from "./actions";

export const setHeatFlow = (heatFlow) => ({ type:SET_HEAT_FLOW, payload:{heatFlow}})
export const setResistance = (resistance) => ({ type:SET_RESISTANCE, payload:{resistance}})
export const setH0Above = (h0) => ({ type:SET_H0_ABOVE_THE_PIPE, payload:{h0}})
export const setH0Under = (h0) => ({ type:SET_H0_UNDER_THE_PIPE, payload:{h0}})
