export const getKeyByValue=(map, searchValue) =>{
  for (const [key, value] of map) {
      if(value === key){
      return value
      }
  }
}