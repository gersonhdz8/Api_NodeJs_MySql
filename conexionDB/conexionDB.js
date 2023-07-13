import mysql from "mysql2";
import {Router} from "express"

const appDB = Router();
let conexion = undefined;

appDB.use((req,res,next) => {

    let config = JSON.parse(process.env.MY_DATABASE);
    conexion=mysql.createPool(config);    
    next();
});

export { appDB, conexion };