import { createTable } from "../createTable";

const tableName = 'Таблица 8'
const speeds = [0.05, 0.1, 0.2, 0.3, 0.4,0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.4, 1.6, 1.8, 2];
const pressureLoss = [7, 22, 75, 154, 255, 377, 520, 683, 864, 1065, 1283, 1774, 2333, 2961, 3654, 4413];
const deltas = [20, 15, 10, 5];
const line1 = [559, 419, 279, 140]
const line2 = [1117, 838, 559, 279]
const line3 = [2234, 1676, 1117, 559]
const line4 = [3351, 2513, 1676, 559]
const line5 = [4468, 3351, 2234, 1117]
const line6 = [5585, 4189, 2793, 1396]
const line7 = [6702, 5027, 3351, 1676]
const line8 = [7819, 5864, 3910, 1955]
const line9 = [8936, 6702, 4468, 2234]
const line10 = [10053, 7540, 5027, 2513]
const line11 = [11170, 8378, 5585, 2793]
const line12 = [13404, 10053, 6702, 3351]
const line13 = [15638, 11729, 7819, 3910]
const line14 = [17872, 13404, 8936, 4468]
const line15 = [20106, 15080, 10053, 5027]
const line16 = [22340, 16755, 11170, 5585]


export const table8_18x2_V = createTable(tableName, deltas, speeds, line1, line2,line3, line4, line5, line6, line7,line8,line9,line10,line11,line12,line13,line14,line15,line16)
export const table8_18x2_P = createTable(tableName, deltas, pressureLoss, line1, line2,line3, line4, line5, line6, line7,line8,line9,line10,line11,line12,line13,line14,line15,line16)
