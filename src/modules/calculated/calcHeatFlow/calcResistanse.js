import { interpolation } from "../../interpolation";
import { table1_18x2 } from "../../tables/tables1-9/table1";
import { table2_25x3_5 } from "../../tables/tables1-9/table2";


const getValueByKey=(map, searchValue) =>{
  for (const [key, value] of map) {
    if(key === searchValue){
      return value
    }
  }
}
export const getResistance =( h0, table, step) =>{
  let startValue=0;
  let lastValue=0;
  let startKey=0;
  for (const [key, value] of table) {
    if (key === h0) {
      return getValueByKey(value, step)
    }else if(h0 > key){
      startValue = getValueByKey(value, step)
      startKey=key
    }else if (h0 < key  ){
      lastValue = getValueByKey(value, step)
      return Math.round(interpolation(h0, startKey, key, startValue,lastValue)*100)/100
    }

  }
}

export const getResistanceInterpalation = (d, h0, step) => {
  const result14=getResistance(h0, table1_18x2, step)
  const result18=getResistance(h0, table2_25x3_5 , step)
  return Math.round(interpolation( d, 14, 18, result14, result18 )*100)/100
}
