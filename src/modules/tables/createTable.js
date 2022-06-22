

export const createTableLine = (rowCelParametrs, arrOfValues, ) => {
    let map = new Map()
    for (let i = 0; i < arrOfValues.length; i++) {
        map.set(rowCelParametrs[i], arrOfValues[i] )
    }
    return map
}
export const createTableLines =(rowCelParametrs, ...lines) =>{
  return lines.reduce((result, item)=>{
    result.push(createTableLine(rowCelParametrs, item))
    return result
  },[])
}

export const createTable = (tableName, rowCelParametrs, columnCellParametrs, ...lines) =>{
  const tabelines = createTableLines (rowCelParametrs, ...lines)
  const table = new Map();
  table.set('name', tableName )
  for (let i = 0; i < columnCellParametrs.length; i++) {
    table.set(columnCellParametrs[i], tabelines[i])
  }
  return table
}