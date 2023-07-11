import express from 'express';
import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express"

const appProductos = Router();
//dotenv.config();
//appProductos.use(express.json());

let conexion = undefined;

appProductos.use((req,res,next) => {

    conexion=mysql.createPool({
        host: "172.16.49.20",
        user: "sputnik",
        password: "Sp3tn1kC@",
        database: "prueba_backend",
        port: 3306
    })    
    next();
});

appProductos.get('/list', (req, res) => {
    

    conexion.query(
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

    // VALORES DE ENTRADA PARA CREAR UNA BODEGA (`id`, `nombre`, `id_responsable`, `estado`, `created_by`, `updated_by`, `created_at`, `updated_at`, `deleted_at`)
    conexion.query(
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