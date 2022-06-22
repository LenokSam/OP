import { createTable } from "../createTable";

const tableName = 'Поток тепла Q1, передаваемый вверх, в фазе стабилизации параметров';
const airSpeeds = [0.5, 1, 3];
const outsideAirTemperatures = [268, 263, 257, 255, 253, 251, 249];
const line1_274 = [77, 143, 223, 250, 277, 304, 331]
const line2_274 = [89, 164, 254, 284, 315, 345, 375]
const line3_274 = [139, 254, 392, 437, 483, 528, 573]
const line1_278 = [132, 199, 280, 308, 335, 363, 391]
const line2_278 = [151, 227, 318, 349, 379, 410, 441]
const line3_278 = [233, 349, 486, 532, 578, 623, 669]



export const table3_274К = createTable(tableName, outsideAirTemperatures, airSpeeds, line1_274, line2_274, line3_274)
export const table3_278К = createTable(tableName, outsideAirTemperatures, airSpeeds, line1_278, line2_278, line3_278)
