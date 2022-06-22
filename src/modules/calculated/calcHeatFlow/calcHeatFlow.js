import { interpolation } from "../../interpolation";
import { table3_274К } from "../../tables/tables1-9/table3";
import { table3_278К } from "../../tables/tables1-9/table3";



export const getHeatFlow =( speed, table, tair) =>{
  const lineForSearch = table.get(speed)
  let startValue = 0;
  let startKey = 0;
  const tAirK = tair+273;
  for (const [key, value] of lineForSearch) {
    if (key === tAirK) {
      return value
    }else if(key < tAirK){
      return interpolation(tAirK, key, startKey, startValue, value )
    }
    startValue = value;
    startKey = key;
  }
}

export const getHeatFlowInterpalation = (tfloor, speed, tair) => {
  tfloor+=273
  const result274=getHeatFlow(speed, table3_274К , tair)
  const result278=getHeatFlow(speed, table3_278К , tair)
  return interpolation( tfloor, 274, 278, result274, result278 )
}