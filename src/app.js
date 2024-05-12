import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json()); //interpreta los valores json que han sido procesados

app.use(indexRoutes);
app.use('/api', employeesRoutes); //---/api se antepone a las rutas designadas en employeesRoutes

//Si no encuentra la ruta se ejecuta lo siguiente funcion middleware
app.use((req, res, next) => {
res.status(404).json({
    message: 'url no encontrado'
})
})

export default app;