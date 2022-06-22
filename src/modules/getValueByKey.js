export const getValueByKey=(map, searchValue) =>{
    for (const [key, value] of map) {
      if(key === searchValue){
        return value
      }
    }
  }
