import {createPool} from "mysql2"
import {dbConfig} from "./deployConfig.js"

var dataBase = createPool(dbConfig);
console.log(dbConfig);

export const db = dataBase;

