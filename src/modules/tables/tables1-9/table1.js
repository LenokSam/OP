import { createTable } from "../createTable";

const tableName = 'Таблица 1'
const reducedThickness = [0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.20, 0.22, 0.24, 0.26, 0.28, 0.30, 0.32, 0.34, 0.36, 0.38, 0.4];
const steps = [0.1, 0.15, 0.2, 0.25, 0.3];
const line1 = [0.08, 0.11,0.13, 0.16, 0.18]
const line2 = [0.11, 0.13, 0.16, 0.1, 0.21]
const line3 = [0.13, 0.16, 0.19, 0.22, 0.25]
const line4 = [0.15, 0.19, 0.22, 0.25,0.28]
const line5 = [0.18, 0.21, 0.25, 0.28, 0.31]
const line6 = [0.20, 0.24, 0.28, 0.31, 0.35]
const line7 = [0.22, 0.27, 0.31, 0.35, 0.38]
const line8 = [0.25, 0.30, 0.34, 0.38, 0.42]
const line9 = [0.27, 0.33, 0.37, 0.41, 0.45]
const line10 = [0.29, 0.35, 0.40, 0.45, 0.49]
const line11 = [0.32, 0.38, 0.43, 0.48, 0.52]
const line12 = [0.34, 0.41, 0.47, 0.51, 0.56]
const line13 = [0.36, 0.44, 0.50, 0.55, 0.59]
const line14 = [0.39, 0.47, 0.53, 0.58, 0.63]
const line15 = [0.41, 0.49, 0.56, 0.62, 0.67]
const line16 = [0.44, 0.52, 0.59, 0.65, 0.70]
const line17 = [0.46, 0.55, 0.62, 0.68, 0.74]
const line18 = [0.48, 0.58, 0.62, 0.68, 0.74]


export const table1_18x2 = createTable(tableName, steps, reducedThickness, line1, line2,line3, line4, line5, line6, line7,line8,line9,line10,line11,line12,line13,line14,line15,line16,line17,line18)
