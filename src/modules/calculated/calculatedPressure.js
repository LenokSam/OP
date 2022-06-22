import { interpolation } from "../../modules/interpolation"
import { round10 } from "../../modules/round10"
import { table8_18x2_P } from "../../modules/tables/tables1-9/table8";
import { table9_25x3_P } from "../../modules/tables/tables1-9/table9";

export const getPressure =( q, table, delta) =>{
  let startValue=0;
  let lastValue=0;
  let startKey=0;
  let lastKey=0;
  for (const [key, value] of table) {
    if(typeof value !== 'string' ){
      let qValue =  value.get(delta)
      if (q === qValue){
        console.log(key)
        return (key)
      } else if( q > qValue ){
        startValue = qValue
        startKey=key
      } else if( q < qValue ){
        lastValue = qValue
        lastKey = key
        let result = interpolation(q, startValue, lastValue, startKey, lastKey)
        return round10(result)
      }
    }
    }
}

export const getPressureInterpalation = (d, q, delta) => {
  const result14=getPressure(q, table8_18x2_P, delta)
  const result18=getPressure(q, table9_25x3_P , delta)
  return Math.round(interpolation( d, 14, 18, result14, result18 )*100)/100
}
