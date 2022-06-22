import { createTable } from "../createTable";

const tableName = 'Значения минимальной температуры воды в греющем контуре Tpw[°C] как функции потока тепла Q[Вт/м2], а также термических сопротивлений R[м2К/Вт] и температуры поверхности Tf=278К'
const resistances = [0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.20, 0.22, 0.24, 0.26, 0.28, 0.30, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.50, 0.52, 0.54, 0.56, 0.58, 0.6];
const heatFlowes = [70, 120, 170, 220, 270, 320, 370, 420, 470, 520, 570, 620, 670];
const line1 = [10.6, 14.6, 18.6, 22.6, 30.6, 34.6, 38.6, 42.6, 46.6, 50.6, 54.6, 58.6]
const line2 = [12, 17, 22, 27, 32, 37, 42, 47, 52, 57, 62]
const line3 = [13.4, 19.4, 25.4, 31.4, 37.4, 43.4, 49.4, 55.4, 61.4]
const line4 = [14.8, 21.8, 28.8, 35.8, 42.8, 49.8, 56.8]
const line5 = [16.2, 24.2, 32.2, 40.2, 48.2, 56.2]
const line6 = [17.6, 26.6, 35.6, 44.6, 53.6, 62.6]
const line7 = [19, 29, 39, 49, 59]
const line8 = [20.4, 31.4, 42.4, 53.4]
const line9 = [21.8, 33.8, 45.3, 57.8]
const line10 = [23.2, 36.2, 49.2]
const line11 = [24.6, 38.6, 52.6]
const line12 = [26, 41, 56]
const line13 = [27.4, 43.4, 59.4]
const line14 = [28.8, 45.8]
const line15 = [30.2, 48.2]
const line16 = [31.6, 50.6]
const line17 = [33, 53]
const line18 = [34.4, 55.4]
const line19 = [35.8, 57.8]
const line20 = [37.2]
const line21 = [38.6]
const line22 = [40]
const line23 = [41.4]
const line24 = [42.8]
const line25 = [44.2]
const line26 = [45.6]
const line27 = [47]

export const table7_278К = createTable(tableName, heatFlowes, resistances, line1, line2,line3, line4, line5, line6, line7,line8,line9,line10,line11,line12,line13,line14,line15,line16,line17,line18,line19,line20,line21,line22,line23,line24, line25, line26,line27)