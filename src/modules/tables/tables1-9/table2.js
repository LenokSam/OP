import { createTable } from "../createTable";

const tableName = 'Таблица 1'
const reducedThickness = [0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.20, 0.22, 0.24, 0.26, 0.28, 0.30, 0.32, 0.34, 0.36, 0.38, 0.4];
const steps = [0.1, 0.15, 0.2, 0.25, 0.3];
const line1 = [0.07, 0,10, 0.12, 0.14, 0.17 ]
const line2 = [0.09, 0.12, 0.14, 0.17, 0.20]
const line3 = [0.11, 0.14, 0.17, 0.20, 0.22]
const line4 = [0.13, 0.17, 0.20, 0.23, 0.25]
const line5 = [0.15, 0.19, 0.22, 0.25, 0.28]
const line6 = [0.17, 0.22, 0.25, 0.28, 0.32]
const line7 = [0.20, 0.24, 0.28, 0.31, 0.35]
const line8 = [0.22, 0.26, 0.28, 0.31, 0.35]
const line9 = [0.24, 0.29, 0.33, 0.37, 0.41]
const line10 = [0.26, 0.31, 0.36, 0.40, 0.44]
const line11 = [0.28, 0.34, 0.39, 0.43, 0.47]
const line12 = [0.30, 0.36, 0.41, 0.46, 0.50]
const line13 = [0.32, 0.39, 0.44, 0.49, 0.54]
const line14 = [0.34, 0.41, 0.47, 0.52, 0.57]
const line15 = [0.36, 0.44, 0.50, 0.55, 0.60]
const line16 = [0.38, 0.46, 0.52, 0.58, 0.63]
const line17 = [0.40, 0.48, 0.55, 0.61, 0.66]
const line18 = [0.42, 0.51, 0.58, 0.64, 0.70]


export const table2_25x3_5 = createTable(tableName, steps, reducedThickness, line1, line2,line3, line4, line5, line6, line7,line8,line9,line10,line11,line12,line13,line14,line15,line16,line17,line18)
