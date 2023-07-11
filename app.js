import express from 'express';
import dotenv from 'dotenv';
import appBodegas from "./router/bodegas.js";
import appProductos from "./router/productos.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/bodegas", appBodegas)
app.use("/productos", appProductos)



let config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, () => {
    console.log(`Server is running on http://${config.hostname}:${config.port}`);
})

