import express from 'express';
import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express"
import * as conexionDB from "../conexionDB/conexionDB.js";
import {Exclude, plainToClass} from "class-transformer"

const appProductos = Router();
//dotenv.config();
//appProductos.use(express.json());



appProductos.get('/list', (req, res) => {
    
    const sql= conexionDB.conexion;
    sql.query(
        /*sql*/`SELECT id_producto, SUM(cantidad) AS Total
            FROM inventarios
            GROUP BY id_producto
            ORDER BY Total DESC;`,        
            (error, data,fils) => {
                console.log(error);
                console.log(data);
                console.log(fils);
                res.send(data);
        }
    );   
    
})
appProductos.post('/newBodega', (req, res) => {
    
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




export default appProductos;