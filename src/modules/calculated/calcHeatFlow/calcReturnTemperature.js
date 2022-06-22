import { interpolation } from "../../interpolation";
import { table6_274К } from "../../tables/tables1-9/table6";
import { table7_278К } from "../../tables/tables1-9/table7";
import { getValueByKey } from "../../../modules/getValueByKey";

const getValueByKeyWithInterpalation =(map, searchValue) =>{
  let startValue = 0;
  let startKey = 0;
  for (const [key, value] of map) {
    if (key === searchValue) {
      return value
    }else if(key > searchValue){
      return interpolation(searchValue, startKey, key, startValue, value )
    }
    startValue = value;
    startKey = key;
  }
}


export const getReturnTemperature =( resistance, table, heatFlow) =>{
  let startValue=0;
  let lastValue=0;
  let startKey=0;
  for (const [key, value] of table) {
  if (key === resistance) {
      return getValueByKeyWithInterpalation(value, heatFlow)
  }else if(resistance > key){
    startValue = getValueByKeyWithInterpalation(value, heatFlow);
    startKey = key 
  }else if (resistance < key  ){
    lastValue = getValueByKeyWithInterpalation(value, heatFlow);
    
    return Math.round(interpolation(resistance, startKey, key, startValue,lastValue)*100)/100
  }
  }
}
  

export const getReturnTemperatureWithInterpalation  = (tfloor, resistance, heatFlow) => {
  tfloor+=273
  const result274=getReturnTemperature(resistance, table6_274К , heatFlow)
  const result278=getReturnTemperature(resistance, table7_278К , heatFlow)
  return Math.ceil(interpolation( tfloor, 274, 278, result274, result278 )*100)/100
}
