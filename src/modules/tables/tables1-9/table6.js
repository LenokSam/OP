import { createTable } from "../createTable";

const tableName = 'Значения минимальной температуры воды в греющем контуре Tpw[°C] как функции потока тепла Q[Вт/м2], а также термических сопротивлений R[м2К/Вт] и температуры поверхности Tf=274К'
const resistances = [0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.20, 0.22, 0.24, 0.26, 0.28, 0.30, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.50, 0.52, 0.54, 0.56, 0.58, 0.6];
const heatFlowes = [70, 120, 170, 220, 270, 320, 370, 420, 470, 520, 570, 620, 670];
const line1 = [6.6, 10.6, 14.6, 18.6, 22.6, 26.6, 30.6, 34.6, 38.6, 42.6, 46.6, 50.6, 54.6]
const line2 = [8, 13, 18, 23, 28, 33, 38, 43, 48, 53, 58]
const line3 = [9.4, 15.4, 21.4, 27.4, 33.4, 39.4, 45.4, 51.4, 57.4]
const line4 = [10.8, 17.8, 24.8, 31.8, 38.8, 45.8, 52.8]
const line5 = [12.2, 20.2, 28.2, 36.2, 44.2, 52.2]
const line6 = [13.6, 22.6, 31.6, 40.6, 49.6, 58.6]
const line7 = [15, 25, 35, 45, 55]
const line8 = [16.4, 27.4, 38.4, 49.4]
const line9 = [17.8, 29.8, 41.8, 53.8]
const line10 = [19.2, 32.2, 45.2]
const line11 = [20.6, 34.6, 48.6]
const line12 = [22, 37, 52]
const line13 = [23.4, 39.4, 55.4]
const line14 = [24.8, 41.8]
const line15 = [26.2, 44.2]
const line16 = [27.6, 46.6]
const line17 = [29, 49]
const line18 = [30.4, 51.4]
const line19 = [31.8, 53.8]
const line20 = [33.2]
const line21 = [34.6]
const line22 = [36]
const line23 = [37.4]
const line24 = [38.8]
const line25 = [40.2]
const line26 = [41.6]
const line27 = [43]

export const table6_274К = createTable(tableName, heatFlowes, resistances, line1, line2,line3, line4, line5, line6, line7,line8,line9,line10,line11,line12,line13,line14,line15,line16,line17,line18,line19,line20,line21,line22,line23,line24, line25, line26,line27)
