import express from 'express';
import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express"

const appBodegas = Router();
//dotenv.config();
//appBodegas.use(express.json());

let conexion = undefined;

appBodegas.use((req,res,next) => {

    conexion=mysql.createPool({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "prueba_backend",
        port: 3306
    })    
    next();
});

appBodegas.get('/list', (req, res) => {

    //console.log("hola")

    conexion.query(
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


export default appBodegas;