import express from 'express';
import dotenv from 'dotenv';
import appBodegas from "./router/bodegas.js";
import appProductos from "./router/productos.js";
import * as conexionDB from "./conexionDB/conexionDB.js"

dotenv.config();
const app = express();

app.use(express.json());
app.use("/bodegas",conexionDB.appDB, appBodegas)
app.use("/productos",conexionDB.appDB, appProductos)



let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, () => {
    console.log(`Server is running on http://${config.hostname}:${config.port}`);
})

