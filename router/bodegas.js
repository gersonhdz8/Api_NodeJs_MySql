import mysql from "mysql2";
import {Router} from "express";
import * as conexionDB from "../conexionDB/conexionDB.js";
import {Exclude, plainToClass} from "class-transformer"

const appBodegas = Router();

appBodegas.get('/list', (req, res) => {
    const sql= conexionDB.conexion;
    //console.log("hola")
    sql.query(
        /*sql*/`SELECT * FROM  bodegas
        ORDER BY nombre ASC`,        
        (error, data,fils) => {
            console.log(error);
            console.log(data);
            console.log(fils);
            res.send(data);
        }
    );   
    
})

appBodegas.post('/newBodega', (req, res) => {
    
    const sql= conexionDB.conexion;
    // VALORES DE ENTRADA PARA CREAR UNA BODEGA (`id`, `nombre`, `id_responsable`, `estado`, `created_by`, `updated_by`, `created_at`, `updated_at`, `deleted_at`)
    sql.query(
        /*sql*/`INSERT INTO bodegas SET ?`,
        [req.body],
        (error, data,fils) => {
            console.log(error);
            console.log(data);
            console.log(fils);
            data.affectedRows += 200;
            let result = req.body;
            result.id = data.insertId;
            res.status(data.affectedRows).send(result);
        })
});


export default appBodegas;