import { createTable } from "../createTable";

const tableName = 'Таблица 8'
const speeds = [0.05, 0.1, 0.2, 0.3, 0.4,0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.4, 1.6, 1.8, 2];
const pressureLoss = [5, 16, 55, 112, 186, 275, 380, 499, 631, 778, 937, 1296, 1704, 2163, 2669, 3223];
const deltas = [20, 15, 10, 5];
const line1 = [923, 692, 462, 231]
const line2 = [1847, 1385, 923, 462]
const line3 = [3693, 2770, 1847, 923]
const line4 = [5540, 4155, 2770, 1385]
const line5 = [7386, 5540, 3693, 1847]
const line6 = [9233, 6924, 4616, 2308]
const line7 = [11079, 8309, 5540, 2770]
const line8 = [12926, 9694, 6463, 3231]
const line9 = [14772, 11079, 7386, 3693]
const line10 = [16619, 12464, 8309, 4155]
const line11 = [18465, 13849, 9233, 4616]
const line12 = [22158, 16619, 11079, 5540]
const line13 = [25851, 19388, 12926, 6463]
const line14 = [29544, 22158, 14772, 7386]
const line15 = [33237, 24928, 16619, 8309]
const line16 = [36930, 27698, 18465, 9233]


export const table9_25x3_V = createTable(tableName, deltas, speeds, line1, line2,line3, line4, line5, line6, line7,line8,line9,line10,line11,line12,line13,line14,line15,line16)
export const table9_25x3_P = createTable(tableName, deltas, pressureLoss, line1, line2,line3, line4, line5, line6, line7,line8,line9,line10,line11,line12,line13,line14,line15,line16)
